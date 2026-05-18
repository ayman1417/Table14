import React, { useContext, useEffect, useState } from 'react'
import Recipe from '../../Components/Recipe/Recipe'
import { useParams } from 'react-router'
import axios from 'axios';
import { loadContext } from '../../Contexts/LoadContext';
import Loading from '../Loading/Loading';

export default function Categories() {
  const { categoryName } = useParams();
  const [categoryMeals, setCategoryMeals] = useState();
  const { loading, setLoading } = useContext(loadContext);
  async function getCategoryRecipes(categoryName) {
    setLoading(true)
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`).
      then((res) => {

        setCategoryMeals(res.data.meals);
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        setLoading(false)
        console.log("done")
      })
  }
  useEffect(() => {
    getCategoryRecipes(categoryName);
  }, [categoryName])

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <div className='p-7 mx-auto'>
        {/* <h1 className="text-2xl font-bold "> asad</h1> */}
        <div className='grid  sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            (categoryMeals?.map((Meals, index) => {
              return (
                <Recipe recipes={Meals} index={index} />
              )
            }))
          }
        </div>
        {/* <button onClick={getAreas}>click me</button> */}
      </div>
    </div>
    // <h1>ayman</h1>
  )
}
