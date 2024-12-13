// =============import part start
import { useEffect } from 'react'
import React from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
// =============import part end
const LayoutOne = () => {
  return (
    <> 
           <Outlet />
    </>
  )
}

export default LayoutOne
