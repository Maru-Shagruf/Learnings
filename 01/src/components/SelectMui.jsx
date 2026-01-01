import { Box ,TextField,MenuItem} from '@mui/material'
import React from 'react'
import { useState } from 'react'
function SelectMui() {
    const [country,setcountry] = useState([])
    console.log(country);
  return (
    <Box width='250px'>
        <TextField label='Select county' select value={country} onChange={(e)=>{setcountry(e.target.value)}} fullWidth inputProps={{
            multiple:'true'
        }}>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>United State</MenuItem>
            <MenuItem value='UK'>United Kingdom</MenuItem>
        </TextField>
    </Box>
  )
}

export default SelectMui
