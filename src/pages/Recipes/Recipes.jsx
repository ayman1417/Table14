import React, { useEffect, useState } from 'react'
import foodimg from "../../assets/ben-lei-flFd8L7_B3g-unsplash.jpg"
import axios from 'axios';
import { Button } from '@heroui/react';
import { h1 } from 'framer-motion/client';
import Recipe from '../../Components/recipe/recipe';
export default function Recipes() {

  const [recipes, setRecipes] = useState();


  async function getRecipes() {
    const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    console.log(data.meals)
    setRecipes(data.meals)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className='p-5'>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          recipes?.map((recipe) => (
            // <h1 key={recipe.idMeal}>{recipe.strMeal}</h1>
            <Recipe recipes={recipe} />
          ))
        }

      </div>
    </div>
  )
}
