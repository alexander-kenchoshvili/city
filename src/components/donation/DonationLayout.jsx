import React from 'react'
import { Outlet } from 'react-router-dom'
import Donation from './Donation'

function DonationLayout() {
  return (
    <>
        <Donation/>
        <Outlet/>
    </>
  )
}

export default DonationLayout