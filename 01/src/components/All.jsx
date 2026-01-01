import React from 'react'
import{ useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Autocomplete,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  Switch,
  Rating,
  Checkbox,
  Button
} from '@mui/material';
import  SendIcon  from '@mui/icons-material/Send'

// Data for Autocomplete
const ROLES = ['Developer', 'Designer', 'Product Manager', 'Student', 'Other'];

function All() {
    const [experience, setExperience] = useState('');
    const [rating, setRating] = useState(2);
    const [notify, setNotify] = useState(true);
  return (
    <>
    <Box 
      sx={{ 
        minHeight: '100vh', 
        bgcolor: '#f4f6f8', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 2
      }}
    >
      {/* 2. CARD CONTAINER */}
      <Box 
        sx={{ 
          width: '100%',
          maxWidth: 500,
          bgcolor: 'white',
          borderRadius: 4,
          boxShadow: '0px 10px 40px rgba(0,0,0,0.1)',
          padding: 4,
          border: '1px solid #e0e0e0'
        }}
      >
        <Stack spacing={3}>
          
          {/* TYPOGRAPHY */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Feedback Form
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
              Please fill out all the fields below.
            </Typography>
          </Box>

          {/*INPUT (TextField)*/}
          <TextField 
            label="Full Name" 
            variant="outlined" 
            fullWidth 
            sx={{ bgcolor: '#f9f9f9' }}
          />

          {/*   AUTOCOMPLETE  */}
          <Autocomplete
            options={ROLES}
            renderInput={(params) => <TextField {...params} label="Current Role" />}
            sx={{ bgcolor: '#f9f9f9' }}
          />

          {/*  SELECT (Dropdown)  */}
          <FormControl fullWidth>
            <InputLabel>Years of Experience</InputLabel>
            <Select
              value={experience}
              label="Years of Experience"
              onChange={(e) => setExperience(e.target.value)}
              sx={{ bgcolor: '#f9f9f9' }}
            >
              <MenuItem value={1}>0-1 Years</MenuItem>
              <MenuItem value={3}>2-5 Years</MenuItem>
              <MenuItem value={5}>5+ Years</MenuItem>
            </Select>
          </FormControl>

          {/* RADIO GROUP  */}
          <FormControl>
            <FormLabel sx={{ mb: 1, fontSize: '0.9rem' }}>Preferred Contact Method</FormLabel>
            <RadioGroup row defaultValue="email">
              <FormControlLabel value="email" control={<Radio />} label="Email" />
              <FormControlLabel value="phone" control={<Radio />} label="Phone" />
            </RadioGroup>
          </FormControl>

          {/* SWITCH & RATING ROW */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            
            {/* SWITCH */}
            <FormControlLabel 
              control={
                <Switch 
                  checked={notify} 
                  onChange={(e) => setNotify(e.target.checked)} 
                />
              } 
              label="Get Notifications" 
            />

            {/* RATING */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
              <Typography component="legend" variant="caption">Rate Us</Typography>
              <Rating 
                value={rating} 
                onChange={(event, newValue) => setRating(newValue)}
                precision={0.5} 
              />
            </Box>
          </Stack>

          {/*  CHECKBOX */}
          <FormControlLabel 
            control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { color: 'green' } }} />} 
            label={
              <Typography variant="body2">
                I agree to the Terms & Conditions
              </Typography>
            } 
          />

          {/* BUTTON */}
          <Button 
            variant="contained" 
            size="large"
            endIcon={<SendIcon size={20} />}
            sx={{ 
              borderRadius: 4, 
              padding: 1.5,
              fontWeight: 'bold',
              boxShadow: '0 4px 14px 0 rgba(25, 118, 210, 0.39)'
            }}
          >
            Submit Feedback
          </Button>
        </Stack>
      </Box>
    </Box>
    </>
  )
}

export default All
