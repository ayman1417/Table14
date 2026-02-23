import { Children, useState } from 'react'

import './App.css'
import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import Areas from './pages/Areas/Areas'
import Ingredients from './pages/Ingredients/Ingredients'
import Recipes from './pages/Recipes/Recipes'
import Navbar from './Components/Navbar/Navbar'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import RecipePage from './pages/RecipePage/RecipePage'

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/areas", element: <Areas /> },
      { path: "/ingredients", element: <Ingredients /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/recipe/:id", element: <RecipePage /> },
    ]
  }])
  return (
    <div className="  min-h-screen ">
      <RouterProvider router={router} />
    </div>
  )
}



export default App




