import React from 'react'
import {Box} from '@mui/material'
function BoxMui() {
  return (
    <>
    <Box display='flex' flexDirection='column' width='100%' height='97vh' alignItems='center' justifyContent='center'>
    <Box sx={{
        bgcolor:'cyan',
        height:'100px',
        width:'100px',
        margin:'15px',
        padding:'10px',
        borderRadius:'15px',
        '&:hover':{
            backgroundColor:'black',
            color:'white'
        },
        border:'1px,solid,black'
    }}>
        Hello world
    </Box>
    <Box sx={{
        bgcolor:'pink',
        height:'100px',
        width:'100px',
        margin:'15px',
        padding:'10px',
        borderRadius:'15px',
        '&:hover':{
            backgroundColor:'purple',
            color:'white'
        }
    }}>
        Hello world
    </Box>
    <Box sx={{
        bgcolor:'beige',
        height:'100px',
        width:'100px',
        margin:'15px',
        padding:'10px',
        borderRadius:'15px',
        '&:hover':{
            backgroundColor:'green',
            color:'white'
        }
    }}>
        Hello world
    </Box>
    <Box sx={{
        bgcolor:'turquoise',
        height:'100px',
        width:'100px',
        margin:'15px',
        padding:'10px',
        borderRadius:'15px',
        '&:hover':{
            backgroundColor:'orange',
            color:'white'
        }
    }}>
        Hello world
    </Box>
    </Box>
    </>
  )
}

export default BoxMui
