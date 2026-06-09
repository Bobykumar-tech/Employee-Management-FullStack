import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Schedule1 from './components/schedule/Schedule1.jsx'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import AdminDashboard from './components/dashboard/AdminDashboard.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App/>} >
    <Route path = 'schedule' element = {<Schedule1/>}/>
     <Route index element = {<AdminDashboard/>}/>

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
