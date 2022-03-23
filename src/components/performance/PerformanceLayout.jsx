import React, { useState, useEffect } from 'react';
import Performance from './Performance';
import PerformancePhoto from '../../assets/images/performance-poster.png';

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
          { date: "2022-03-20T20:00:00" },
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
          { date: "2022-03-22T21:00:00" },
          { date: "2022-04-02T18:00:00" }
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
  const [availableDaysByMonths, setAvailableDaysByMonths] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

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
      if(!allMovies.length){
          return;
      }
   
    let daysByMonths = [];
    for (let i = 0; i < 12; i++) {
        daysByMonths.push([]);
    }

    allMovies.forEach((movie) => {
        movie.dates.forEach((d) => {
            daysByMonths[Number(d.date.slice(5, 7)) - 1].push(
                Number(d.date.slice(8, 10))
            );
        });
    });

    setAvailableDaysByMonths(daysByMonths);


    let currentMonth = new Date().getMonth() + 1;

    if (daysByMonths[currentMonth - 1].length === 0) {
        let earliestAvailableMonthIndex = daysByMonths.findIndex(
            (d) => d.length > 0
        );
        if (earliestAvailableMonthIndex > -1) {
            currentMonth = earliestAvailableMonthIndex + 1;
        }
    }

    let earliestAvailableDay = daysByMonths[currentMonth - 1][0] || 1;

    setFilters((latestFilters) => ({
        ...latestFilters,
        day: earliestAvailableDay,
        month: currentMonth
    }));
}, [allMovies]);
  return (
    <Performance 
        allMovies={allMovies} 
        filteredMovies={filteredMovies} 
        filters={filters}
        setFilters={setFilters}
        availableDaysByMonths={availableDaysByMonths}
     />
  )
}




export default PerformanceLayout