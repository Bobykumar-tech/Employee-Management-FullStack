import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/login'
import {Outlet} from 'react-router-dom'

function App() {


  return (
    <>
      
   <Login/>
 <Outlet/>
      
            
    </>
  )
}

export default App
