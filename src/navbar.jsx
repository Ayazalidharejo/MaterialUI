import { AppBar, Box, Button, Grid, Grid2, IconButton, Link, ListItem, ListItemAvatar, Toolbar, Typography } from '@mui/material'

import React from 'react'
// import { Icon } from '@iconify/react';
 import './index.css';
 import './App.css';
import LOGO from "./images/logo.png"
import HERO from "./images/hero.png"
const Navbar = () => {
  return (
    <>
    <Box className="" sx={{ flexGrow: 1 }}>
      <AppBar className='bg-white' position="static ">
        <Toolbar className='d-flex justify-content-between container'>
        <img src={LOGO} alt="" />
         <Box className="d-flex">
        
<Link className='text-decoration-none text-black' href="#" color="inherit">
  <Typography variant="body1">
  Home

  </Typography>
</Link>
<Link className='mx-5 text-decoration-none text-black' href="#" color="inherit">
  <Typography variant="body1">
  Service 

  </Typography>
</Link>
<Link className='text-decoration-none text-black' href="#" color="inherit">
  <Typography variant="body1">
  Feature

  </Typography>
</Link>
<Link className='mx-5 text-decoration-none text-black' href="#" color="inherit">
  <Typography variant="body1">
  Product

  </Typography>
</Link>
<Link className='text-decoration-none text-black' href="#" color="inherit">
  <Typography variant="body1">
  Testimonial

  </Typography>
</Link>
<Link className='ms-5 text-decoration-none text-black' href="#" color="inherit">
  <Typography variant="body1">
  FAQ

  </Typography>
</Link>
         </Box>
          <Box>
          <Button className='text-success rounded-3 px-3 py-2 '  >Login</Button>
          <Button className='text-white rounded-3 px-3 py-2 bg-success ' >Sign up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <Box className="color">
    <Grid2 className="d-flex justify-content-between align-items-center container pt-5 pb-5 " container spacing={2} columns={16}>
  <Grid2 item xs={8}>
    <ListItemAvatar>
<Typography className='fw-bold' variant='h2'>Lessons and insights </Typography>
<Typography  className='text-success fw-bold' variant='h3'> from 8 years </Typography>
<Typography className=' mt-3' variant='body1'> Where to grow your business as a photographer: site or social media? </Typography>

<br />
<Button className='text-white rounded-1 px-3 py-2 bg-success ' >Register</Button>
    </ListItemAvatar>
  </Grid2>
  <Grid2 item xs={8}>
    <ListItem><img className='key' src={HERO} alt="" /></ListItem>
  </Grid2>
</Grid2>
</Box>
    </>
  )
}

export default Navbar