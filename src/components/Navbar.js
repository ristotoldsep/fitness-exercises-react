import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/gym.png'

const Navbar = () => {
  return (
    <Stack direction="row"
        justifyContent="start"
        sx={{ gap: { sm: '12px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'start' }} px="20px"
    >
        <Link to="/">
            <img src={Logo} alt="logo" style={{ width: '200px', height: '120px', objectFit: 'contain', margin: '0 0px'}} />
        </Link>
        <Stack direction="row"
            gap="40px"
            fontSize="24px"
            justifyContent="start"
            alignItems="center"
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