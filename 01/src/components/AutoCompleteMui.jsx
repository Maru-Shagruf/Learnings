import React, { useState } from 'react'
import { Stack,Autocomplete, TextField, useScrollTrigger } from '@mui/material'
let Skills =['HTML','java','javascript','typescript','css','c++']
function AutoCompleteMui() {
  const [skill,setskill]=useState('')
  console.log(skill);
  return (
    <>
    <Stack>
      <Autocomplete 
      options={Skills} 
      renderInput={(params)=><TextField  {...params} variant='outlined' color='success'/>} 
      value={skill} 
      onChange={(e,newvalue)=>{setskill(newvalue)}}>
      </Autocomplete>
    </Stack>
    </>
  )
}

export default AutoCompleteMui
