import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin() {
  return (
    <div className='w-full h-full bg-slate-500 flex flex-row '>
        <div className='w-1/5 h-screen flex flex-col gap-5 pl-4 pt-2  bg-slate-600 '>
       <p className='font-bold'>Navigation</p>
        <NavLink
         to="/dashboard"
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

        <div className='w-4/5 h-screen p-8 flex flex-col gap-[10%]'>
       
            <div className='w-full h-[10%] flex flex-row justify-center gap-10 '>
                <div className='w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600'>Em-Category1</div>
                 <div className='w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600'>Em-Category2</div>
                  <div className='w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600'>Product</div>

            </div>
            <p className='font-bold pl-[10%]'>Task-Bar</p>
            <div className='w-full h-[80%] flex flex-col items-center gap-[10%] '>
                
                 
                 <div className='w-full h-[15%] flex flex-row gap-10 justify-center'>
                 <NavLink
                 to="/em1"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Em-Cat1-List</NavLink>
                 <NavLink
                 to="/em2"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Em-Cat2-List</NavLink>
                   <NavLink
                 to="/product"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Product</NavLink>

            </div>
             <div className='w-full h-[15%] flex flex-row gap-10 justify-center'>
                <NavLink
                 to="/budget"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Budget</NavLink>
                 <NavLink
                 to="sale"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Sales</NavLink>
                   <NavLink
                 to="/profit"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Profit-Loss</NavLink>

            </div>
             <div className='w-full h-[15%] flex flex-row gap-10 justify-center'>
                <NavLink
                 to="/attendance"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Attendance</NavLink>
                 <NavLink
                 to="salary"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Salary</NavLink>
                   <NavLink
                 to="/schedule"
                 className={({isActive}) =>
                   `w-1/4 h-full flex justify-center items-center text-emerald-100  bg-slate-600 ${isActive ? "text-amber-600" : " text-emerald-100"} hover:bg-amber-500`
                }
                 >Schedule</NavLink>


            </div>
            </div>

        </div>
    </div>
  )
}

export default Admin