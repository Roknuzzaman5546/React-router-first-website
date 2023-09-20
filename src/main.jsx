import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Compponent/home/Home.jsx'
import Users from './Compponent/Users/Users.jsx'
import Userdetails from './Compponent/Userdetails/Userdetails.jsx'
import About from './Compponent/About/About.jsx'
import Errorconsept from './Compponent/Errorconsept/Errorconsept.jsx'

const router = createBrowserRouter([
      {
        path: '/',
        element: <Home></Home>,
        errorElement: <Errorconsept></Errorconsept>,
        children:[
          {
            path: '/about',
            element: <About></About>
          },
          {
            path: '/user',
            loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
            element: <Users></Users>
          },
          {
            path: '/user/:userId',
            loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.userId}`),
            element: <Userdetails></Userdetails>,
          }
        ]
      }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
