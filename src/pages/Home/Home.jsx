import React, { use, useEffect, useState } from 'react'
import foodimg from "../../assets/ben-lei-flFd8L7_B3g-unsplash.jpg"
import foodimg2 from "../../assets/food.jpg"
import { Button } from '@heroui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Home() {

    const [recipe, setRecipe] = useState();


    async function getRecipe() {
        const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52776")
        console.log(data.meals[0])
        setRecipe(data.meals[0])
    }

    useEffect(() => {
        getRecipe()
    }, [])


    return (
        <div className="h-screen grid md:grid-cols-2">

            {/* LEFT PANEL */}

            <div className="bg-gray-950 text-white hidden  md:flex items-center ">
                <div className="p-12  mb-20">
                    <div className="relative ">
                        <p className="text-md font-bold text-accent mb-2 ">
                            {recipe?.strArea}
                        </p>
                        <div className="relative bottom-0 border-2 border-main w-[85%]  "></div>
                    </div>
                    <div className="my-5">
                        <h1 className="text-5xl font-bold leading-tight mb-2  ">
                            {recipe?.strMeal}
                        </h1>
                        <p className="text-zinc-300 text-lg max-w-md">
                            Discover the taste of {recipe?.strArea} cuisine with this amazing {recipe?.strCategory.toLowerCase()} recipe.
                        </p>
                    </div>


                    <div className="gap-3 flex">
                        <Button as={Link} to={`/recipe/${recipe?.idMeal}`} variant="solid" className=" bg-main text-white text-md font-semibold  " >
                            View Recipe
                        </Button>
                        <Button as="a" target='_blank' href={recipe?.strYoutube} variant="solid" className=" bg-red-600 text-md font-semibold text-white " >
                            Youtube
                        </Button>
                    </div>
                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative  md:h-[80%] md:mt-6">

                <img
                    src={recipe?.strMealThumb}
                    alt="Food"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/70 md:hidden flex justify-center items-start ">
                    <div className=" text-white mt-24  ">
                        <div className="p-12">
                            <div className="relative ">
                                <p className="text-md font-bold text-accent mb-2 ">
                                    {recipe?.strArea}
                                </p>
                                <div className="relative bottom-0 border-2 border-main w-[85%]  "></div>
                            </div>
                            <div className="my-5">
                                <h1 className="text-4xl font-bold leading-tight mb-2  ">
                                    {recipe?.strMeal}
                                </h1>
                                <p className="text-zinc-300 sm:text-lg max-w-md">
                                    Discover the taste of {recipe?.strArea} cuisine with this amazing {recipe?.strCategory.toLowerCase()} recipe.
                                </p>

                                <div className="gap-3 flex mt-2">
                                    <Button as={Link} to={`/recipe/${recipe?.idMeal}`} variant="solid" className=" bg-main text-white text-md font-semibold  " >
                                        View Recipe
                                    </Button>
                                    <Button as="a" target='_blank' href={recipe?.strYoutube} variant="solid" className=" bg-red-600 text-md font-semibold text-white " >
                                        Youtube
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
