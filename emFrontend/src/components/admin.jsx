import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className='w-full h-full bg-slate-500 flex flex-row '>
        <div className='w-1/5 h-screen flex flex-col gap-5 pl-4 pt-2  bg-slate-600 '>
       <p className='font-bold'>Navigation</p>
        <NavLink
         to=""
             className={({isActive}) =>
            ` ${isActive ? "text-amber-600" : " text-emerald-100"} hover:text-amber-500`
        }
        >Dashboard</NavLink>
         <NavLink
         to="/em1"
             className={({isActive}) =>
            ` ${isActive ? "text-amber-600" : " text-emerald-100"} hover:text-amber-500`
        }
        >Em-Category1</NavLink>
         <NavLink
         to="/em2"
             className={({isActive}) =>
            ` ${isActive ? "text-amber-600" : " text-emerald-100"} hover:text-amber-500`
        }
        >Em-Category2</NavLink>
         <NavLink
         to="/product"
             className={({isActive}) =>
            `${isActive ? "text-amber-600" : " text-emerald-100"} hover:text-amber-500`
        }
        >Product</NavLink>
        
        </div>
        
          <Outlet/>
        
        </div>

     
  )
}

export default Admin