import React from 'react'
import { Card,CardContent,CardMedia,CardActions,Button,Typography } from '@mui/material'
function CardMui() {
  return (
    <>
    <Card sx={{width:'300px',
    m:'20px',
    p:'10px',
    bgcolor:'#ffa',
    borderRadius:'15px',
    border:'2px,solid,black'
    }}>
        <CardMedia component='img'
        height='100px'
        image='https://imgv3.fotor.com/images/side/image-mirror.jpg'/>
        <CardContent>
            <Typography variant='h6' gutterBottom>Hello John doe</Typography>
            <Typography variant='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, debitis eius explicabo iste unde dignissimos.</Typography>
        </CardContent>
        <CardActions>
            <Button>Share</Button>
            <Button>Learn more</Button>
        </CardActions>
    </Card>
    </>
  )
}

export default CardMui
