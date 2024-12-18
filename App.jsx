// =================import part start
import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import Home from './Pages/Home'
import LayoutOne from './Layouts/LayoutOne'
import app from './firebase.config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
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
          <ToastContainer />
    </>
  )
}
export default App
