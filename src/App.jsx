import { Children, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import Areas from './pages/Areas/Areas'
import Recipes from './pages/Recipes/Recipes'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import RecipePage from './pages/RecipePage/RecipePage'
import IsLoginContextProvider from './Contexts/IsLoginContext'
import { ToastContainer } from 'react-toastify'
import Auth from './pages/authentication/Auth'
import RouteGuard from './Auth/RouteGuard'
import RouteAuthGuard from './Auth/RouteAuthGuard'
import AreaRecipes from './pages/AreaRecipes/AreaRecipes'
import LoadContextProvider from './Contexts/LoadContext'
import MyTable from './pages/MyTable/MyTable'
import SearchContextProvider from './Contexts/SearchContext'

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { path: "/", element: <RouteGuard> <Home /> </RouteGuard> },
      { path: "home", element: <Navigate to={"/"} /> },
      { path: "/areas", element: <RouteGuard> <Areas /> </RouteGuard> },
      { path: "/recipes", element: <RouteGuard> <Recipes /> </RouteGuard> },
      { path: "/recipe/:id", element: <RouteGuard>  <RecipePage /></RouteGuard> },
      { path: "/area/:areaName", element: <RouteGuard>  <AreaRecipes /></RouteGuard> },
      { path: "/categories/:categoryName", element: <RouteGuard>  <Categories /></RouteGuard> },
      { path: "/My-Table/", element: <RouteGuard>  <MyTable /></RouteGuard> },
      { path: "/register", element: <RouteAuthGuard> <Auth /> </RouteAuthGuard> },
    ]
  }])
  return (
    <LoadContextProvider>
      <IsLoginContextProvider>
        <SearchContextProvider>
          <div className="  min-h-screen ">
            <RouterProvider router={router} />
            <ToastContainer />
          </div>
        </SearchContextProvider>
      </IsLoginContextProvider>
    </LoadContextProvider>
  )
}



export default App




