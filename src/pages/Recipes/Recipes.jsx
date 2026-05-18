import React, { useContext, useEffect, useState } from 'react'
import foodimg from "../../assets/ben-lei-flFd8L7_B3g-unsplash.jpg"
import axios from 'axios';
import { Button } from '@heroui/react';
import { h1 } from 'framer-motion/client';
// import Recipe from '../../Components/recipe/recipe';
import Loading from '../Loading/Loading';
import { loadContext } from '../../Contexts/LoadContext';
import Recipe from '../../Components/Recipe/Recipe';
import { searchContext } from '../../Contexts/SearchContext';
export default function Recipes(rec) {

  const [recipes, setRecipes] = useState();
  const { loading, setLoading } = useContext(loadContext);
  const { searchReady, setSearchReady } = useContext(searchContext)
  async function getRecipes() {
    setLoading(true)
    await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=Black Pepper").then((res) => {
      setRecipes(res.data.meals)
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      console.log("done");
      setLoading(false)
    })
  }

  useEffect(() => {
    if (searchReady.length > 0 && searchReady) {
      setRecipes(searchReady);
      return
    } else {
      getRecipes()
    }
  }, [searchReady])



  if (loading) {
    return <Loading />
  }
  return (
    <div className='p-5'>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          recipes?.map((recipe) => (
            <Recipe recipes={recipe} />
          ))
        }

      </div>
    </div>
  )
}
