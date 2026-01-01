import React from 'react'
import { Box,FormControl,FormControlLabel,FormLabel,Radio,RadioGroup } from '@mui/material'
import { useState } from 'react'
function RadioMui() {
  const [gender,setgender]=useState('')
    console.log(gender);
  return (
    <>
    <Box>
    <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup value={gender} onChange={(e)=>{setgender(e.target.value)}} row>
            <FormControlLabel value='male' control={<Radio/>} label='male'></FormControlLabel>
            <FormControlLabel value='female' control={<Radio/>} label='female'></FormControlLabel>
            <FormControlLabel value='others' control={<Radio/>} label='others'></FormControlLabel>
        </RadioGroup>
    </FormControl>
    </Box>
    </>
  )
}

export default RadioMui
