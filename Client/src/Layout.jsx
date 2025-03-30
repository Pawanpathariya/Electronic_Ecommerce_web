import React from 'react'
import Header from './component/Header'
import Topmenu from './component/Topmenu'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Topmenu/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
