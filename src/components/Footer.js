import React from 'react'
import { Box, Stack } from '@mui/material';

import Logo from '../assets/images/gym.png'


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" py="0px">
        <img src={Logo} alt="logo" width="200px" />
      </Stack>
    </Box>
  )
}

export default Footer