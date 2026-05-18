import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Recipe from '../../Components/Recipe/Recipe';
import Loading from '../Loading/Loading';
import { loadContext } from '../../Contexts/LoadContext';

export default function AreaRecipes() {
    const { areaName } = useParams();
    const [areaMeals, setAreaMeals] = useState();
    const { loading, setLoading } = useContext(loadContext);

    async function getAreaRecipes(areaName) {
        setLoading(true)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`).
            then((res) => {
                setAreaMeals(res.data.meals);
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                console.log("done")
                setLoading(false)
            })
    }
    useEffect(() => {
        getAreaRecipes(areaName);
    }, [])

    if (loading) {
        return <Loading />
    }
    return (
        <div className='p-5'>
            <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    areaMeals?.map((areaMeal) => (
                        // <h1 key={recipe.idMeal}>{recipe.strMeal}</h1>
                        <Recipe recipes={areaMeal} />
                    ))
                }

            </div>
            {/* <h1>{areaName}</h1> */}
        </div>
    )
}
