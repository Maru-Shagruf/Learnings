import React from 'react'
import { Grid } from '@mui/material'
function GridMui1() {
  return (
    <Grid container spacing={2}>
      <Grid bgcolor='seagreen' size={{xs:12, sm:8}}>1</Grid>
      <Grid bgcolor='blueviolet' size={{xs:8, sm:12}}>2</Grid>
      <Grid bgcolor='yellow' size={{xs:6, sm:4}}>3</Grid>
      <Grid bgcolor='red' size={{xs:4, sm:6}}>4</Grid>
    </Grid>
  )
}

export default GridMui1
