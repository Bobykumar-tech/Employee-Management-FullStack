import { useState } from 'react'

import Login from './components/login'
import {Outlet} from 'react-router-dom'
import Navbar from './components/navbar'
import Admin from './components/admin'
import Emcategory1 from './components/Emcategory1'
import Emcategory2 from './components/Emcategory2'
import Schedule1 from './components/schedule/Schedule1'
function App() {


  return (
    <>
      
   {/* <Login/> */}

   <Navbar/>
   {/* <Schedule1/> */}
   {/* <Emcategory2/> */}
   {/* <Emcategory1/> */}
   <Admin/>

 <Outlet/>
      
            
    </>
  )
}

export default App
