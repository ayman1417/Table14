import React from 'react'
import { Button } from '@heroui/react'

export default function Recipe({ recipes }) {
    return (
        <div>

            <div className="relative bg-white rounded-4xl p-3 group overflow-hidden  hover:rotate-1 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer">

                <div className="relative w-full h-64 overflow-hidden rounded-3xl">

                    <img
                        src={recipes?.strMealThumb}
                        alt={recipes?.strMeal}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0  from-black/40 "></div>

                </div>

                <div className="p-3 flex justify-evenly items-center ">

                    {/* <i className="fa-solid fa-utensils text-main "></i> */}
                    <h1 className="text-lg font-bold text-mainDark line-clamp-1">
                        {recipes?.strMeal}
                    </h1>
                    {/* <i className="fa-solid fa-utensils text-mainDark"></i> */}
                    {/* <p className="text-sm text-gray-400 mt-1">
                        {recipes?.strArea} • {recipes?.strCategory}
                    </p> */}

                </div>

                <div className="absolute inset-0 bg-mainDark/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">

                    <div className="flex gap-3 translate-y-10 group-hover:translate-y-0 transition-all duration-500">

                        <Button
                            as="a"
                            target="_blank"
                            href={recipes?.strSource}
                            className="bg-main text-white font-semibold px-5 shadow-lg hover:scale-[1.02] transition-all duration-200"
                        >
                            View Recipe
                        </Button>

                        <Button
                            className="bg-red-600 text-white font-semibold px-5 shadow-lg hover:scale-[1.02] transition-all duration-200"
                        >
                            Save
                        </Button>

                    </div>

                </div>

            </div>

        </div>
    )
}
