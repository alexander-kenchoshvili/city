
import './App.css';
import MainPage from './components/MainPage/MainPage';
import {BrowserRouter as Router, Routes, Route, useLocation}  from 'react-router-dom';
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
import Dashboard from './components/Profile/Dashboard';
import Ticket from './components/Profile/Ticket';
import MyProfile from './components/Profile/MyProfile';
import NewsDetail from './components/News/NewsDetail';
import Donation from './components/donation/Donation';
import DonationLayout from './components/donation/DonationLayout';
import PhisicalPerson from './components/donation/PhisicalPerson';
import Organisation from './components/donation/Organisation';
import Performance from './components/performance/Performance';
import PerformanceLayout from './components/performance/PerformanceLayout';
import EventDetail from './components/Event/EventDetail';
import Partners from './components/partners/Partners';
import BuyTicket from './components/buyTicket/BuyTicket';





function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route  path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/base' element={<Base />} />
          <Route path='/event' element={<Event/>} />
          <Route path='ActorDetail' element={<ActorDetail/>}  />
          <Route path='rent' element={<Rent />}/>
          <Route path='about' element={<About/>} />
          <Route path='news' element={<News/>} />
          <Route path='newsDetail' element={<NewsDetail/>} />
          <Route path='eventDetail' element={<EventDetail/>} />
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


          
        </Route>

        
        

        
      </Routes>     
     
    </Router>
    </div>
  );
}

export default App;
