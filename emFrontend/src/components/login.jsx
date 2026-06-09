import React from "react";
import { NavLink } from "react-router-dom";

function Login (){
    return (
        <div className="w-full h-full bg-amber-50 flex  justify-center pt-20">
             
            <form action="" method="" className="w-1/3 h-70 p-4 flex flex-col bg-slate-500 ">
             <label htmlFor="id3">EmployeeId</label>
            <input type="text" className= "bg-slate-100 my-2 px-1" id ="id3"  />
            <label htmlFor="id4">Password</label>
            <input type="password" className= "bg-slate-100 my-2 px-1" id ="id4"  />
            <button className="my-7 bg-slate-300">Search</button>
           

        </form>
        
        </div>
       
    )
}

export default Login;