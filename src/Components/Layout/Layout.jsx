import React, { useContext } from 'react';
// import { Outlet } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Login from '../../pages/authentication/Login'
import SignUp from '../../pages/authentication/SignUp'
import Auth from '../../pages/authentication/Auth'
import { isLoginContext } from '../../Contexts/IsLoginContext'
export default function Layout() {


    const { logged, setLogged } = useContext(isLoginContext);
    return (
        <div>
            {logged &&
                <Navbar />
            }
            <div className="  ">
                <Outlet />

            </div>
            {/* <Auth /> */}
            {/* <Login /> */}
            {/* <SignUp /> */}
        </div>
    )
}


