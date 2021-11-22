import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
const Homepage =()=> {
    return (
        <div>
            <h1> Home Page</h1>
            <Link to = "/logout"  >
            <Button variant="contained" color="secondary">
            Logout
            </Button>
            </Link>
            <Link to = "/schedular"  >
            <Button variant = "contained" color="primary">
            Create Schedular
            </Button>
            </Link>
        </div>
    )
}

export default Homepage
