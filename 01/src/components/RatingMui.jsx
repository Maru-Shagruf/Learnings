import React, { useState } from 'react'
import { Stack,Rating, stackClasses } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
function RatingMui() {
    const [value,setvalue]=useState(3)
    console.log(value);
    
  return (
    <>
    <Stack>
        <Rating value={value} 
        onChange={(e)=>{setvalue(e.target.value)}} 
        precision={0.5} 
        icon={<FavoriteIcon color='secondary'/>}
        emptyIcon={<FavoriteIcon/>}
        readOnly></Rating>


        <Rating value={value} 
        onChange={(e)=>{setvalue(e.target.value)}} 
        precision={0.5}
        highlightSelectedOnly></Rating>
    </Stack>
    </>
  )
}

export default RatingMui
