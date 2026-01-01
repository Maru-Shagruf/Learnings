import React from 'react'
import { TextField,Stack,InputAdornment,IconButton } from '@mui/material'
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from 'react';
function Input() {
  const [value,setvalue]=useState('')
  return (
    <>
    <Stack>
        <TextField label="name" variant="standard"
        sx={{m:3,p:1,bgcolor:"cyan", borderRadius:5}} value={value} onChange={(e)=>setvalue(e.target.value)}
        error={!value}
        helperText={!value?'required':'do not share'}>
            first field
        </TextField>
        <TextField label="email" variant="outlined"
        sx={{m:3,p:1,bgcolor:"pink", borderRadius:5}}>
            second field
        </TextField>
        <TextField label="password" type='password' variant="filled"
        sx={{m:3,p:1,bgcolor:"brown", borderRadius:5}}>
            third field
        </TextField>
    </Stack>





    <Stack direction='row' spacing={2}  sx={{m:3,p:1}}>
      <TextField label='outlined ,small ,info' variant='outlined' size='small' color='info' type
    ='password'></TextField>
      <TextField label="Password" variant="filled" color="warning" type="password" helperText="do not share password"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton edge="end">
          <PasswordIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
      <TextField label='read only' InputProps={{readOnly:true,startAdornment:(<InputAdornment position='start'>
        <IconButton >
          <PasswordIcon/>
        </IconButton>
      </InputAdornment>)}}>dfdaf</TextField>
    </Stack>


    <Stack direction='row' spacing={2}>
      <TextField label='amount ,start' InputProps={{
        startAdornment:<InputAdornment position='start'>$</InputAdornment>
      }}></TextField>
      <TextField label='weight,end'  InputProps={{
        endAdornment:<InputAdornment position='end'>kg</InputAdornment>
      }}></TextField>
    </Stack>
    </>
  )
}

export default Input
