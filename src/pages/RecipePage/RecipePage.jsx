import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Recipe from '../../Components/recipe/recipe'
import { Link } from 'react-router-dom'
import { Button } from '@heroui/react'
export default function RecipePage() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState()
    async function getRecipe(id) {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        console.log(res.data.meals[0])
        setRecipe(res.data.meals[0])
    }

    useEffect(() => {
        getRecipe(id)
    }, [])
    return (
        <div className="p-5 lg:w-4/5 min-h-screen lg:mx-auto bg-white rounded-2xl shadow-lg">
            <div className=" grid grid-cols-1  lg:grid-cols-3 gap-3 ">
                <div className="">
                    <div className="ml-2">
                        <h1 className=' font-bold text-4xl '>{recipe?.strMeal}</h1>
                        <div className=" flex justify-start gap-5 mt-2">
                            <p className=' bg-gray-200 rounded-2xl px-3 py-1 text-xs font-semibold   text-gray-500 '> {recipe?.strCategory}</p>
                            <p className='bg-gray-200 rounded-2xl px-3 py-1 text-xs font-semibold   text-gray-500 '> {recipe?.strArea}</p>
                        </div>
                    </div>
                    <div className="rounded-4xl overflow-hidden w-full shadow-2xl group  my-4 ">
                        <img className='w-full group-hover:scale-[1.05] transition-all  duration-500' src={recipe?.strMealThumb} alt={recipe?.strMeal} />
                    </div>
                    <div className="flex gap-3 justify-center">
                        {recipe?.strSource &&
                            <Button as="a" target='_blank' href={recipe?.strSource} variant="solid" className=" bg-mainDark text-white text-md font-semibold  " >
                                source
                            </Button>
                        }
                        <Button as="a" target='_blank' href={recipe?.strYoutube} variant="solid" className=" bg-red-600 text-md font-semibold text-white " >
                            Youtube
                        </Button>
                    </div>
                </div>
                <div className="lg:col-span-2 lg:mt-16 lg:p-6 ">
                    <h1 className=' font-bold text-2xl mb-3 '>Instructions</h1>
                    < p className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {recipe?.strInstructions}
                    </p>
                </div>
                <div className="ml-2 lg:col-span-3 mt-3 p-6">
                    <h1 className=' font-bold text-2xl mb-3  '>Ingredients</h1>
                    <div className="grid sm:grid-cols-2 grid-cols-1  lg:grid-cols-3 gap-3 ">
                        {recipe?.strIngredient1 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'> {recipe?.strMeasure1} {recipe?.strIngredient1}</p>}
                        {recipe?.strIngredient2 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure2} {recipe?.strIngredient2}</p>}
                        {recipe?.strIngredient3 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure3} {recipe?.strIngredient3}</p>}
                        {recipe?.strIngredient4 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure4} {recipe?.strIngredient4}</p>}
                        {recipe?.strIngredient5 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure5} {recipe?.strIngredient5}</p>}
                        {recipe?.strIngredient6 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure6} {recipe?.strIngredient6}</p>}
                        {recipe?.strIngredient7 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure7} {recipe?.strIngredient7}</p>}
                        {recipe?.strIngredient8 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure8} {recipe?.strIngredient8}</p>}
                        {recipe?.strIngredient9 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure9} {recipe?.strIngredient9}</p>}
                        {recipe?.strIngredient10 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure10} {recipe?.strIngredient10}</p>}
                        {recipe?.strIngredient11 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure11} {recipe?.strIngredient11}</p>}
                        {recipe?.strIngredient12 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure12} {recipe?.strIngredient12}</p>}
                        {recipe?.strIngredient13 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure13} {recipe?.strIngredient13}</p>}
                        {recipe?.strIngredient14 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure14} {recipe?.strIngredient14}</p>}
                        {recipe?.strIngredient15 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure15} {recipe?.strIngredient15}</p>}
                        {recipe?.strIngredient16 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure16} {recipe?.strIngredient16}</p>}
                        {recipe?.strIngredient17 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure17} {recipe?.strIngredient17}</p>}
                        {recipe?.strIngredient18 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure18} {recipe?.strIngredient18}</p>}
                        {recipe?.strIngredient19 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure19} {recipe?.strIngredient19}</p>}
                        {recipe?.strIngredient20 && <p className=' bg-gray-200 rounded-3xl px-3 py-2 text-sm font-medium   text-gray-600'>{recipe?.strMeasure20} {recipe?.strIngredient20}</p>}
                    </div>
                </div>
            </div>

        </div>
    )
}
