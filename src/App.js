
import './App.css';
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter as Router, Routes, Route, Navigate, useLocation}  from 'react-router-dom';
import Base from './components/Base/Base';
import Event from './components/Event/Event';
import Layout from './components/Navigation/Layout';
import ActorDetail from './components/Base/ActorDetail';
import Rent from './components/Rent/Rent';
import About from './components/About/About';
import News from './components/News/News';
import EnterPage from './components/registrationForms/EnterPage';
import Registration from './components/registrationForms/Registration';
import ProfileLayout from './components/Profile/ProfileLayout';
import Ticket from './components/Profile/Ticket';
import MyProfile from './components/Profile/MyProfile';
import NewsDetail from './components/News/NewsDetail';
import DonationLayout from './components/donation/DonationLayout';
import PhisicalPerson from './components/donation/PhisicalPerson';
import Organisation from './components/donation/Organisation';
import PerformanceLayout from './components/performance/PerformanceLayout';
import EventDetail from './components/Event/EventDetail';
import Partners from './components/partners/Partners';
import BuyTicket from './components/buyTicket/BuyTicket';
import MainLogo from './assets/images/mainLogo.svg';
import { useState } from 'react';
import AdminLayout from './components/Admin/AdminLayout';
import MySpectacles from './components/Admin/MySpectacles';
import MyEvents from './components/Admin/MyEvents';
import AdminNews from './components/Admin/AdminNews';
import MyTeam from './components/Admin/MyTeam';
import AdminAbout from './components/Admin/AdminAbout';
import CreateSpectacle from './components/Admin/CreateSpectacle';





function App() {
  const [languageIsChosen, setLanguageIsChosen] = useState(false);

  return (
    <div className="App">
      {!languageIsChosen && (
        <div className="choose-language">
          <div className='intro-logo'>
              <img src={MainLogo} alt="main logo" />
          </div>
          <div className='choose-caption'>
            <h2>აირჩიე ენა</h2>
            <h2>Choose a language</h2>
          </div>
          <div className='choose-language-btns'>
            <span onClick={() => setLanguageIsChosen(true)}>ქართული</span>
            <span onClick={() => setLanguageIsChosen(true)} >English</span>
          </div>
        </div>
      )}
    <Router>
      
      <Routes>
        <Route  path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/base' element={<Base />} />
          <Route path='/event' element={<Event/>} />
          <Route path='ActorDetail/:id' element={<ActorDetail/>}  />
          <Route path='rent' element={<Rent />}/>
          <Route path='about' element={<About/>} />
          <Route path='news' element={<News/>} />
          <Route path='newsDetail/:id' element={ <NewsDetail/>} />
          <Route path='eventDetail/:id' element={<EventDetail/>} />
          <Route path='EnterPage' element={<EnterPage/>}  />
          <Route path='Registration' element={<Registration/>} />
          <Route path='dashboard' element={<ProfileLayout/>} />
          <Route path='donationPage' element={<DonationLayout/>} />
          <Route path='performance' element={<PerformanceLayout/>} />
          <Route path='partners' element={<Partners/>} />
          <Route path='buyTicket' element={<BuyTicket/>}  />
          
         
  
          <Route path='/dashboard' element={<ProfileLayout/>}>
            <Route index element={<MyProfile/>} />
            <Route path='ticket' element={<Ticket/>} />
          </Route>

          <Route path='/donationPage' element={<DonationLayout/>}>
            <Route index element={<PhisicalPerson/>} />
            <Route path='organisation' element={<Organisation/>} />
          </Route>

          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<MySpectacles/>}  />
            <Route path='myevents' element={<MyEvents/>} />
            <Route path='mynews' element={<AdminNews/>} />
            <Route path='myteam' element={<MyTeam/>} />
            <Route path='aboutus' element={<AdminAbout/>} />
            <Route path='create' element={<CreateSpectacle/>} />            
          </Route>


          
        </Route>

        
        

        
      </Routes>     
     
    </Router>
    </div>
  );
}

export default App;
