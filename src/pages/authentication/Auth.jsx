import React, { useContext, useState } from 'react'
import Login from './Login';
import SignUp from './SignUp';
import SignImage from "../../assets/SignImage.jpg"
import { isLoginContext } from '../../Contexts/IsLoginContext';
import { Alert } from '@heroui/react';
export default function Auth() {

    const { isLogin, setIsLogin } = useContext(isLoginContext);
    const [animate, setAnimate] = useState(false);

    function goSignUp() {
        setAnimate(true);

        setTimeout(() => {
            setIsLogin(false);
            setAnimate(false);
        }, 2000);
    }

    function goLogin() {
        setAnimate(true);

        setTimeout(() => {
            setIsLogin(true);
            setAnimate(false);
        }, 2000);
    }

    return (

        <div
            className="w-full min-h-screen bg-cover bg-center relative bg-white/50  flex flex-col justify-center items-center    "
            style={{ backgroundImage: `url(${SignImage})` }}
        >
           
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[.6px]"></div>

            <div className={`flex flex-col w-full max-w-md ${isLogin ? "h-[520px]" : "h-[600px]"} justify-center items-center transition-all bg-white/70 border-main/50 border-3 gap-3 p-10  rounded-2xl shadow-lg relative overflow-hidden z-10`}>
                {/* Sliding door with catchy cooking verse */}
                <div className={`absolute left-0 h-full z-50 transition-all duration-1000 ease-in-out w-full bg-main 
                ${animate ? 'top-0' : '-top-full'} rounded-2xl overflow-hidden flex flex-col justify-center items-center`}>

                    {/* Catchy Verse */}
                    <p className="text-white text-2xl font-bold mb-6 text-center animate-bounce">
                        Your meal, our magic
                    </p>

                    {/* Icon */}
                </div>

                {isLogin ?
                    <Login goLogin={goLogin} goSignUp={goSignUp} animate={animate} />
                    :
                    <SignUp goSignUp={goSignUp} goLogin={goLogin} animate={animate} />
                }
            </div>
        </div>
    )
}
