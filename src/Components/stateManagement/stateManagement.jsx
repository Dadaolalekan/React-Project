// hooks: useState, useRef, useEffect, useContent
// state=> is a mutable object for managing an updating a particular data in a component

import { useState } from "react";


const StateManagement =() => {
    // useState
    // variable/data, function(updating the state)
    // const [data, function]= useState(defaultValue)
    const [data, setName]= useState("olamide")
    const  [isLoggedIn, setColor]= useState(false)
    console.log("name");
    const handleChange =()=>{
        setName("Leks")
    }
    const handleLogin =()=>{
    // isLoggedIn === true ? setColor(false):setColor(true)
    if (isLoggedIn===true) {
        setColor(false)
        
    }else(setColor(true))
    }

    return(
        <div>
            <h1>State Management</h1>
            <button onClick={handleChange}>Name</button>
            <button onClick={handleLogin}>Toggle User</button>
            <p>{}</p>

            <p style={{
                background: isLoggedIn? "Green" : "red"
            }}>{isLoggedIn ? `Welcome ${name}`:"Please login"}</p>

        </div>
    )
    

}

export default StateManagement