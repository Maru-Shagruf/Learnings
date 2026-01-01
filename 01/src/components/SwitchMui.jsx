import React, { useState } from 'react'
import { Box,Switch,FormControlLabel } from '@mui/material'
function SwitchMui() {
    const [dark,setdark]=useState(false)
    console.log(dark);
  return (
    <>
    <Box
    sx={{
        backgroundColor:dark ? 'black':'white',
        color:dark?'white':'black'
    }}>

    <FormControlLabel 
    label='dark mode toggle ' 
    checked={dark} 
    onChange={(e)=>{setdark(e.target.checked)}}
    control={<Switch/>}>

    </FormControlLabel>
    </Box>
    </>
  )
}

export default SwitchMui
