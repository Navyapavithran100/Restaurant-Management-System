import {TextField, Typography,Button} from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData] = useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
  return (
    <div   align='center'>
        <h1>SIGNUP</h1>
        <TextField variant='outlined' label='FIRSTNAME' name='fname' align='centre' onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='filled'label='LASTNAME' name='Description'onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='filled'label='EMAIL ID' name='Description'onchange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='filled'label='PASSWORD' name='Description'onchange={inputHandler}/>&nbsp;
        <br /><br />
        

        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Signup