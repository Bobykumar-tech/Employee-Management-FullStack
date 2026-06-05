import React from "react";

function Login (){
    return (
        <div className="w-full h-full bg-amber-50 flex  justify-center pt-3">
             
             <form action="" method="" className="w-1/3 h-1/4 border-b-blue-300 rounded-2xl flex flex-col bg-blue-400 ">
            <input type="radio" id = "id1" value="Admin" name="role" />
            <label htmlFor="id1">Admin</label>
            <input type="radio" id = "id2" value="Employee" name="role" />
            <label htmlFor="id2">Employee</label>
            <input type="text" id ="id3"  />
            <label htmlFor="id3">id</label>

        </form>
        </div>
       
    )
}

export default Login;