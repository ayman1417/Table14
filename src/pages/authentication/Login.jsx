import React, { useContext, useState } from 'react'
import SignImage from "../../assets/SignImage.jpg"
import logo from "../../assets/logo.png"
import { Button, Input } from "@heroui/react";
import SignUp from './SignUp';
import { useFormik } from 'formik';
import * as Yub from "yup";
import { useNavigate } from 'react-router';
import { toast, Bounce } from "react-toastify";
import { isLoginContext } from '../../Contexts/IsLoginContext';

export const EyeSlashFilledIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
                fill="currentColor"
            />
            <path
                d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
                fill="currentColor"
            />
            <path
                d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
                fill="currentColor"
            />
            <path
                d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
                fill="currentColor"
            />
            <path
                d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const EyeFilledIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
                fill="currentColor"
            />
            <path
                d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
                fill="currentColor"
            />
        </svg>
    );
};


export default function Login({ goLogin, goSignUp, animate }) {
    const navigate = useNavigate()

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const { logged, setLogged } = useContext(isLoginContext);

    const { handleChange, handleSubmit, touched, errors, values, handleBlur } = useFormik({

        initialValues: {
            email: "",
            password: "",
        }
        ,
        onSubmit: () => {
            console.log(values);
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const exists = users.find(user => user.email === values.email);
            const e = users.find(user => user.email === values.email && user.password === values.password);

            if (!exists) {
                toast.error('User not found!', {
                    position: "top-center",
                    autoClose: 3500,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                return;
            }
            if (!e) {
                toast.error('Wrong Password !', {
                    position: "top-center",
                    autoClose: 3500,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                return;
            }
            navigate("/");
            setLogged(true);
            // const users = JSON.parse(localStorage.getItem("users")) || [];



            if (exists) {

                const loggedUser = {
                    name: exists.name,
                    email: exists.email,
                    password: exists.password,
                    favMeals: exists.favMeals || [],
                };

                localStorage.setItem(
                    "loggedUser",
                    JSON.stringify(loggedUser)
                );
            }
        }
        ,
        validationSchema: Yub.object({
            email: Yub.string().email("Invalid email format").required("Email is required"),
            password: Yub.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        })
    })



    return (

        <div className="">


            {/* Content */}

            <div className="">
                <div className="text-center mb-8 ">
                    <h1 className="md:text-4xl text-2xl font-bold text-gray-800 ">
                        Welcome to <span className="text-main">Table14</span>
                    </h1>

                    <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                        Discover <span className="text-main font-semibold">15,000+ recipes </span>
                        from chefs around the world.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className=" w-full flex flex-col justify-center items-center gap-4 mt-2 ">


                    <Input
                        label="Email"
                        labelPlacement="outside"
                        type="email"
                        variant='bordered'
                        className='w-full'
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        errorMessage={errors.email}
                        isInvalid={touched.email && errors.email}
                    />
                    <Input
                        className=""
                        endContent={
                            <button
                                aria-label="toggle password visibility"
                                className="focus:outline-solid outline-transparent"
                                type="button"
                                onClick={toggleVisibility}
                            >
                                {isVisible ? (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        label="Password"
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                        labelPlacement="outside"
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        errorMessage={errors.password}
                        isInvalid={touched.password && errors.password}

                    // isInvalid={!!errors.password}

                    />

                    <Button type='submit' className='w-full mt-2 bg-mainDark text-lg   font-bold text-white' >
                        Login
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                        Don’t have an account ? {" "}
                        <button type="button" onClick={() => goSignUp()}>
                            <span className="text-main font-semibold cursor-pointer">
                                Sign Up
                            </span>
                        </button>
                    </p>
                </form>

                {/* <div className="absolute top-0 left-0 w-full  group-hover:h-full bg-black z-10  rounded-2xl">
        
        </div> */}

            </div>
        </div>
    )
}
