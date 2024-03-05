import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{flexGrow:1}}>
      <AppBar position='static' sx={{background:'black'}}>
        <Toolbar>
            <Typography sx={{flexGrow:1}} align='left'style={{color:"white"}} variant h1><h2>FOODIE</h2></Typography>
            <Button> 

            <Button>
                <Link to='/c' style={{color:'white'}} ><h6>Login</h6></Link>
                </Button>
                <Button>
                <Link to='/t' style={{color:'white'}} ><h6>Signup</h6></Link>
                </Button>
                <Link to='/a' style={{color:'white'}} ><h6>Home</h6></Link>
                </Button>
                <Button>
                <Link to='/b' style={{color:'white'}} ><h6>Dashboard</h6></Link>
                </Button>

          
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

