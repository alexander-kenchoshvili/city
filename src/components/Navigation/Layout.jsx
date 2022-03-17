import React from 'react';
import {Outlet} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Footer from '../Footer/Footer';
import SecondaryNav from '../Navigation/SecondaryNav';
import Navbar from './Navbar';

function Layout() {
    const location = useLocation();
  return (
      <>
        {location.pathname === '/'? <Navbar/> : <SecondaryNav  /> }
        <Outlet />{location.pathname !== '/'? <Footer/> : null}
      </>

  )
}

export default Layout