import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Components/Home/Home'
import Homee from './Components/H/Homee'
import Contact from './Components/Contact/Contact'
import Categories from './Components/Categories/Categories'
import Category from './Components/Category/Category'
import Meal from './Components/Meal/Meal'
import ForYou from './Components/ForYou/ForYou'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Homee></Homee>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/categories",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Categories></Categories>,
      },
      {
        path: "categories/category/:category",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
          ),
        element: <Category></Category>,
      },
      {
        path: "/meal/:id",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
        element: <Meal></Meal>,
      },
      {
        path: "/items",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"),
        element: <ForYou></ForYou>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
