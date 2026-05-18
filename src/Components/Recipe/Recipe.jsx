import React from 'react'
import { Button } from '@heroui/react'
import { Link } from 'react-router'
import { toast, Flip } from 'react-toastify';
export default function Recipe({ recipes }) {

    function saveMeal(favRecipe) {

        let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const indexMeal = loggedUser.favMeals.findIndex(
            (favMeal) => favMeal.idMeal === favRecipe.idMeal
        );


        if (indexMeal !== -1) {
            toast.warn('This recipe already exists in favorites', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
            });
            return
        }







        loggedUser.favMeals.push(favRecipe);
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        const updatedUsers = users.map((user) => {
            if (user.email === loggedUser.email) {
                return loggedUser;
            }

            return user;
        });





        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success(' Recipe saved successfully', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
        });
    }
    return (
        <div>

            <div className={`relative bg-white rounded-4xl p-3 group overflow-hidden ${(recipes?.idMeal * 1) % 2 == 0 ? "hover:rotate-2" : "hover:-rotate-2"}  transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer`}>

                <div className="relative w-full h-64 overflow-hidden rounded-3xl">

                    <img
                        src={recipes?.strMealThumb}
                        alt={recipes?.strMeal}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0  from-black/30 "></div>

                </div>

                <div className="p-3 flex justify-evenly items-center ">

                    <h1 className="text-lg font-bold text-mainDark line-clamp-1">
                        {recipes?.strMeal}
                    </h1>


                </div>

                <div className="absolute inset-0 bg-mainDark/40 backdrop-blur-[1.2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">

                    <div className="flex gap-3 translate-y-10 group-hover:translate-y-0 transition-all duration-500">

                        <Button
                            as={Link}
                            target="_blank"
                            to={`/recipe/${recipes?.idMeal}`}
                            className="bg-main text-white font-semibold px-5 shadow-lg hover:scale-[1.02] transition-all duration-200"
                        >

                            View Recipe
                        </Button>

                        <Button
                            className="bg-red-600 text-white flex items-center font-semibold px-5 shadow-lg hover:scale-[1.02] transition-all duration-200"
                            onPress={() => saveMeal(recipes)}
                        >
                            Save
                            <i className="fa-solid fa-heart -ms-1.5"></i>
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    )
}
