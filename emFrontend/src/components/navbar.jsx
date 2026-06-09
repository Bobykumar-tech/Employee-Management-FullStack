import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-full bg-slate-500 flex  justify-center'>
        <div className='w-full h-20 bg-slate-700 flex flex-row text-emerald-100'>
          <div className='w-1/2 h-full flex justify-center items-center'>Logo</div>
          <div className='w-1/2 h-full flex justify-center items-center  gap-8'>
          <NavLink
          to="/home"
            className={({isActive}) =>
            `${isActive ? "text-amber-600" : " text-emerald-100"} hover:text-amber-500`
        }
        >
            Home
          </NavLink>
                <NavLink
          to="/logout"
         className={({isActive}) =>
            `${isActive ? "text-amber-600" : " text-emerald-100"} hover:text-amber-500`
        }
          >
            Logout
          </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar;