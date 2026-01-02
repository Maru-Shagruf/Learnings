import React from 'react'
import { Box,Stack,Divider } from '@mui/material'
function StackMui() {
  return (
    <>
    <Stack 
    sx={{border:'5px,dashed,brown',
        p:'10px',
        m:'10px',
        alignItems:'center',
        justifyContent:'center'
    }}
    direction='row'
    spacing={5}
    divider={<Divider orientation='vertical'flexItem/>}>
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
        </Stack>
    </>
  )
}

export default StackMui
