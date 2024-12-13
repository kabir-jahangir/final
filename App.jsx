// =================import part start
import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import Home from './Pages/Home'
import LayoutOne from './Layouts/LayoutOne'
// ===============import part end
const  App = ()=> {
  // ===============Routing part  start
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path ='/' element ={<LayoutOne />}>
            <Route index element = {<Home />} />
        </Route>
        <Route path = '/Register' element = {<Register />} />
      </Route>
    )
  )
  return (
    <>  
         <RouterProvider router = {myRoute} />
    </>
  )
}
export default App
