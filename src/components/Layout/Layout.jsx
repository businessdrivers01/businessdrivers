import React from 'react'
import '../../css/Layout.css'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../'


function Layout() {
    return (
        <div>


            <Header />

            <Outlet />

            <Footer />



        </div>
    )
}

export default Layout