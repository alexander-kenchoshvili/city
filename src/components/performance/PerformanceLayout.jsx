import React, { useState, useEffect, useRef } from 'react';
import Performance from './Performance';
import PerformancePhoto from '../../assets/images/performance-poster.png';
import { useLinkClickHandler } from 'react-router-dom';

const moviesSample = [
  {
      id: 1,
      title: "ინციდენტი მეტროში",
      poster:PerformancePhoto,
      startTitle:'დაწყების დრო',
      startingTime:'20:00',
      durationTitle:'ხანგრძლივობა',
      duration:'75 წუთი',
      genreTitle:"ჟანრი",
      genre:'დრამა',
      stuffTitle:'სპექტაკლზე მუშაობდნენ',
      describtionTitle:'სპექტაკლის შესახებ',
      describtion: "ორი ახალგაზრდა მამაკაცი მეტროს სავსე ვაგონში აღმოჩნდება. მგზავრებს მათთან ერთად ერთ სივრცეში ყოფნა ნამდვილ ჯოჯოხეთად ექცევათ - ორივე საშინლად ამცირებს მათ და ძალადობს. მაგრამ წინააღმდეგობის გაწევას ვერც ერთი მათგანი ბედავს, ვერც ერთი იცავს საკუთარ ღირსებას და ვერ ერთიანდება ბოროტების წინაღმდეგ. შიშით და დაუსჯელობით ისინი სრულ თავისუფლებას აძლევენ სისასტიკეს.",
      dates: [
          { date: "2022-03-05T20:00:00" },
          { date: "2022-03-17T22:00:00" },
          { date: "2022-03-25T20:00:00" },
          { date: "2022-04-03T21:00:00" }
      ]
  },
  
  {
      id: 2,
      title: "movie 2",
      description: "Movie 2 description",
      dates: [
          { date: "2022-03-20T20:00:00" },
          { date: "2022-03-22T18:00:00" },
          { date: "2022-03-25T21:00:00" },
          { date: "2022-04-02T18:00:00" }
      ]
  },

  {
    id: 3,
    title: "movie 3",
    description: "Movie 3 description",
    dates: [
        { date: "2022-03-25T20:00:00" },
    ]
}
];

function getMovies() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(moviesSample);
      }, );
  });
}
const initialFilters = {
  month: new Date().getMonth() + 1,
  movieId: null,
  day: new Date().getDate()
};

function PerformanceLayout() {
    const [filters,setFilters] = useState(initialFilters);
    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [otherMovies, setOtherMovies] = useState([]);
    const [availableDaysByMonths, setAvailableDaysByMonths] = useState([[],[],[],[],[],[],[],[],[],[],[],[],]);
    const visited = useRef(false);

    useEffect(() => {
        getMovies().then((movies) => setAllMovies(movies));
    }, []);

    useEffect(() => {
        if (allMovies.length) {
            let filtered = allMovies.filter((movie) => {
                return movie.dates.some((d) => {
                    return (
                        d.date.slice(0, 10) ===
                        `2022-${
                            (filters.month < 10 ? "0" : "") +
                            String(filters.month)
                        }-${(filters.day < 10 ? "0" : "") + filters.day}`
                    );
                });
            });

            setFilteredMovies(filtered);
        }
    }, [allMovies, filters.day, filters.month]);

    useEffect(() => {
        if (allMovies.length) {
            let other = allMovies.filter((movie) => {
                return movie.dates.some((d) => {
                    return (
                        Number(d.date.slice(5, 7)) > filters.month ||
                        (
                            Number(d.date.slice(5, 7)) === filters.month &&
                            Number(d.date.slice(8, 10)) > filters.day
                        )
                    );
                });
            });

            setOtherMovies(other);
        }
    }, [allMovies, filters.day, filters.month]);
    
  useEffect(() => {
        if(!allMovies.length){
            return;
        }
    
        let daysByMonths = [];
        for (let i = 0; i < 12; i++) {
            daysByMonths.push([]);
        }

        allMovies.forEach((movie) => {
            movie.dates.forEach((d) => {
                let day = Number(d.date.slice(8, 10));
                let monthArray = daysByMonths[Number(d.date.slice(5, 7)) - 1];
                if(monthArray.length === 0 || monthArray[monthArray.length - 1] < day) {
                    monthArray.push(day);
                } else {
                    for(let i in monthArray) {
                        if(monthArray[i] === day) {
                            break;
                        }

                        if(day < monthArray[i]) {
                            monthArray.splice(i, 0, day);
                        }
                    }
                }
            });
        });

        setAvailableDaysByMonths(daysByMonths);
    }, [allMovies]);

    useEffect(() => {
        let currentMonth = filters.month;
        if(!visited.current && availableDaysByMonths.some(monthArr => monthArr.length > 0)) {
            if (availableDaysByMonths[currentMonth - 1].filter(day => day >= new Date().getDate()).length === 0) {
                let earliestAvailableMonthIndex = availableDaysByMonths.findIndex((d, i) => {
                    return d.length > 0 && i > new Date().getMonth()
                });
                if (earliestAvailableMonthIndex > -1) {
                    currentMonth = earliestAvailableMonthIndex + 1;
                }
            }
            visited.current = true;
        }


        let earliestAvailableDay = availableDaysByMonths[currentMonth - 1][0] || 1;
        
        if(currentMonth <= new Date().getMonth() + 1) {
            earliestAvailableDay = availableDaysByMonths[currentMonth - 1].find(d => d >= new Date().getDate()) || 1;
        }

        setFilters((latestFilters) => ({
            ...latestFilters,
            day: earliestAvailableDay,
            month: currentMonth,
        }));

    }, [allMovies, availableDaysByMonths, filters.month])

  return (
    <Performance 
        allMovies={allMovies} 
        filteredMovies={filteredMovies} 
        otherMovies={otherMovies} 
        filters={filters}
        setFilters={setFilters}
        availableDaysByMonths={availableDaysByMonths}
     />
  )
}




export default PerformanceLayout