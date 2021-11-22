import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
function Logout() {
    return (
        <>
           <h1>Visite Again</h1>
           <Link to = "/" >
           <Button variant = "contained" color="primary" size="large" style ={{width: "100px" , height: "80px"}} >
           Go to login page 
            </Button>
            </Link>
        </>
    )
}

export default Logout
