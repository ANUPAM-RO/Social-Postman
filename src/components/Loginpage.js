import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@material-ui/core';

import '../App.css';
const Loginpage =()=> {
    const [username , setUserName] = useState("");
    const [password , setPassword] = useState("");
    let navigate = useNavigate();
 const submitForm = ()=>{ 
   if(username === "Anupam" && password === "Anupam"){
    navigate('/homepage')
   }else{
     
   }
 }
    return (
        <div className="container">

        <h1>Log In Page</h1>
       <form action ="" onSubmit={submitForm}>
         <label htmlFor="username">User Name:</label>
         <input type="text" id="name" placeholder="Enter your user name" value={username}  onChange={(e) => setUserName(e.target.value)} ></input><br/>
         <label htmlFor="password">Password:</label>
         <input type="password" id="password" placeholder="Enter your password" value={password}
         onChange={(e) => setPassword(e.target.value)}></input><br/>
         <Button type="submit" variant="contained" color="primary">Login</Button>
        </form>
        </div>
    )
}

export default Loginpage
