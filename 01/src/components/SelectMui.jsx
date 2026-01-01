import { Box ,TextField,MenuItem} from '@mui/material'
import React from 'react'

function SelectMui() {
  return (
    <Box width='250px'>
        <TextField label='Select county' select>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>United State</MenuItem>
            <MenuItem value='UK'>United Kingdom</MenuItem>
        </TextField>
    </Box>
  )
}

export default SelectMui
