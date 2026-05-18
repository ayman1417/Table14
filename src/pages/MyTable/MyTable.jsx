import React, { useEffect, useState } from 'react'
import { Envelope, Globe, Plus, TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { Heart } from '@gravity-ui/icons';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { transform } from 'framer-motion';
export default function MyTable() {

    const [favMeals, setFavMeals] = useState([]);
    const [isEmpty, setIsEmpty] = useState(JSON.parse(localStorage.getItem("loggedUser")).favMeals.length == 0);

    useEffect(() => {

        const loggedUser = JSON.parse(
            localStorage.getItem("loggedUser")
        );

        if (loggedUser?.favMeals) {
            setFavMeals(loggedUser.favMeals);
            // setIsEmpty(false);
        }


    }, []);


    function removeMeal(meal) {

        Swal.fire({
            title: "Remove from favorites?",
            text: "Do you want to remove this recipe from your favorites?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, remove it",
            cancelButtonText: "Cancel",
            background: "#fff",
            color: "#1F2937",
        }).then((result) => {

            if (result.isConfirmed) {

                let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

                let users = JSON.parse(localStorage.getItem("users")) || [];


                const indexMeal = loggedUser.favMeals.findIndex(
                    (favMeal) => favMeal.idMeal == meal.idMeal
                );

                let updatedFavMeals = [...loggedUser.favMeals];

                if (indexMeal !== -1) {
                    updatedFavMeals.splice(indexMeal, 1);
                }

                loggedUser = {
                    ...loggedUser,
                    favMeals: updatedFavMeals,
                };

                localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

                const updatedUsers = users.map((user) => {

                    if (user.email === loggedUser.email) {
                        return loggedUser;
                    }

                    return user;
                });

                localStorage.setItem("users", JSON.stringify(updatedUsers));

                setFavMeals(loggedUser.favMeals);
                setIsEmpty(JSON.parse(localStorage.getItem("loggedUser")).favMeals.length == 0)
                Swal.fire({
                    title: "Removed!",
                    text: "Recipe removed successfully.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    background: "#fff",
                    color: "#1F2937",
                });
            }
        });
    }

    return (
        <div className=" p-6">

            {/* Header */}



            {/* Empty state */}
            {isEmpty ? (
                <div className="text-center mt-20">
                    <h2 className="text-4xl font-bold text-gray-700">
                        No favorites yet 🍽️
                    </h2>
                    <p className="text-gray-500 text-xl mt-2">
                        Start adding recipes you love
                    </p>
                </div>
            ) : (<div className=" flex items-center gap-x-2 mb-6">
                <i className="fa-solid fa-heart text-main text-3xl mb-1" ></i>
                <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
                    My Favorites Recipes
                </h1>
            </div>
            )}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {favMeals?.map((meal) => (
                    <div
                        key={meal?.idMeal}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                    >

                        {/* Image */}
                        <div className="relative overflow-hidden h-56">
                            <img
                                src={meal?.strMealThumb}
                                alt={meal?.strMeal}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t  from-black/90 via-black/30 to-transparent
                            " />
                            <div className="absolute bottom-0 left-0 p-4 " >
                                <h2 className=" text-white text-2xl  line-clamp-2 font-bold ">
                                    {meal?.strMeal}
                                </h2>
                            </div>
                        </div>

                        {/* Content */}

                        <div className="flex justify-evenly p-2 gap-3">

                            <Button as={Link} to={`/recipe/${meal?.idMeal}`} className="bg-main w-full font-semibold text-white">
                                View Recipe
                            </Button>


                            <Button onPress={() => removeMeal(meal)} variant="solid" color="danger" className='w-full font-semibold'   >
                                <TrashBin />
                                Remove
                            </Button>
                        </div>


                        {/* Hover Actions */}

                    </div>
                ))}

            </div>
        </div>
    );

}
