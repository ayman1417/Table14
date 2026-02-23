import React from 'react'
// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
    return (
        <div>
            <Navbar />
            <div className="  ">
                <Outlet />
            </div>

        </div>
    )
}


