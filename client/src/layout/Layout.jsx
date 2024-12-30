import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Home from '../pages/home/Home'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Navbar />
            <Home />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout