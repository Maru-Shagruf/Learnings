import React from 'react'
import {Button,Stack,IconButton,ToggleButtonGroup,ToggleButton} from "@mui/material"
import  SendIcon  from '@mui/icons-material/Send'
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderLinedIcon from "@mui/icons-material/FormatUnderLined"
import { useState } from 'react'
function Button1() {
  const [formats, setFormats] = useState([]);
console.log(formats);

  const handleChange = (event, updatedFormats) => {
    setFormats(updatedFormats);

  }
  return (
    <>
    <Stack direction="row" >
      <ToggleButtonGroup value={formats} onChange={handleChange} color='secondary'>

        <ToggleButton value='bold'>
           <FormatBoldIcon/>
        </ToggleButton>

        <ToggleButton value='italic'>
           <FormatItalicIcon/>
        </ToggleButton>

        <ToggleButton value='underlined'>
           <FormatUnderLinedIcon/>
        </ToggleButton>

      </ToggleButtonGroup>
    </Stack>











      <Stack direction="row" spacing={3} sx={{m:3}}>
      <Button variant="text" href='https://google.com'
      sx={{bgcolor:"yellow"}}>
       button with link
        </Button>
      <Button variant="contained"
      sx={{borderRadius:15}}>
        contained
        </Button>
      <Button variant="outlined" onClick={()=>alert("clicked")}>
        button with click event
        </Button>
    </Stack>





    <Stack direction="row" spacing={2} sx={{m:2}}>
          <Button variant='contained' color='primary'>
            primary
          </Button>
          <Button variant='contained' color='secondary'>
            secondary
          </Button>
          <Button variant='contained' color='warning'>
            warning
          </Button>
          <Button variant='contained' color='error'>
            error
          </Button>
          <Button variant='contained' color='success'>
            success
          </Button>
          <Button variant='contained' color='info'>
           info
          </Button>
        </Stack>






        <Stack direction="row" spacing={2} sx={{m:2}}>
          <Button variant='outlined' color='primary'>
            primary
          </Button>
          <Button variant='outlined' color='secondary'>
           secondary
          </Button>
          <Button variant='outlined' color='warning'>
            warning
          </Button>
          <Button variant='outlined' color='error'>
            error
          </Button>
          <Button variant='outlined' color='success'>
            success
          </Button>
          <Button variant='outlined' color='info'>
            info
          </Button>
        </Stack>




        <Stack direction="row" spacing={2} sx={{m:2}}>
          <Button variant='text' color='primary'>
            primary
          </Button>
          <Button variant='text' color='secondary'>
            secondary
          </Button>
          <Button variant='text' color='warning'>
            warning
          </Button>
          <Button variant='text' color='error'>
            error
          </Button>
          <Button variant='text' color='success'>
            success
          </Button>
          <Button variant='text' color='info'>
            info
          </Button>
        </Stack>






        <Stack display='block' direction='row' spacing={3}>
          <Button variant='outlined' size='small'>small</Button>
          <Button variant='outlined' size='medium'>medium</Button>
          <Button variant='outlined' size='large'>large</Button>
        </Stack>





        <Stack direction='row' spacing={2} sx={{m:2,p:2}}>
          <Button variant='contained' startIcon={<SendIcon/>} disableElevation>send</Button>
          <Button variant='contained' endIcon={<SendIcon/>} disableRipple>send</Button>
          <IconButton color="info">
            <SendIcon/>
          </IconButton>
        </Stack>
    </>
  )
}

export default Button1
