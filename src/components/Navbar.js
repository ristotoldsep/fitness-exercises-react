import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/gym.png'

const Navbar = () => {
  return (
    <Stack direction="row"
        justifyContent="start"
        sx={{ gap: { sm: '12px', xs: '0px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'start' }} px="0px"
    >
        <Link to="/">
            <img src={Logo} alt="logo" style={{ width: '200px', height: '120px', objectFit: 'contain', margin: '0 0px'}} />
        </Link>
        <Stack direction="row"
            
            justifyContent="start"
            alignItems="center"
            sx={{fontSize: {xs: '16px', sm: '24px'}, gap: {xs: '15px', sm: '40px'}}}
        >
            <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #ff2625' }}>Home</Link>

            <Link 
                to="/#exercises"
                style={{ textDecoration: 'none', color: '#3A1212'}}
            >
                Exercises
            </Link> 
        </Stack>
    </Stack>
  )
}

export default Navbar