import React, { useState } from 'react'
import { FormControlLabel,Checkbox } from '@mui/material'
function CheckboxMui() {
    const [checked,setchecked]=useState(false)
    console.log(checked);
    
  return (
    <>
    <FormControlLabel label='i accept the term and conditions' 
    control={<Checkbox/>} 
    value={checked} 
    onChange={(e)=>{setchecked(e.target.checked)}}>
    </FormControlLabel>
    </>
  )
}

export default CheckboxMui
