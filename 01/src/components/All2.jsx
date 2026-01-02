import React from 'react';
import { Box, Stack, Divider,Grid } from '@mui/material';
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';

function All2() {
  return (
    <Box sx={{ p: 4, bgcolor: '#f9f9f9', minHeight: '100vh' }}>


      <Stack spacing={2} sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          Summer Collection
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Check out our latest arrivals below.
        </Typography>
        <Divider />
      </Stack>


      <Grid container spacing={4}>

        <Grid size={12}>
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
            <CardMedia
              component="img"
              sx={{ width: { xs: '100%', md: 300 }, height: 300 }}
              image="https://static.vecteezy.com/system/resources/previews/022/255/712/non_2x/beautiful-shoes-generative-ai-free-photo.jpg"
              alt="Featured Product"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Featured Product: The Weekender
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  This is our top-selling item of the month. Perfect for casual outings and events.
                  It combines style with durability.
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                 <Button variant="contained" size="large">Buy Now</Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        {[1, 2, 3].map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://tse1.mm.bing.net/th/id/OIP.TqRgd0FAlCJEdKQrIgyqtAHaE8?pid=Api&P=0&h=180"
                alt="Product Item"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Product Item {item}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A great option for daily use. High quality materials and finish.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='contained'>Share</Button>
                <Button size="small" variant='outlined'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
}

export default All2;