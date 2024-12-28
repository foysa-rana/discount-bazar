import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Home from '../pages/home/Home'

const Layout = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Navbar />
            <Home />
            <Outlet />
        </>
    )
}

export default Layout