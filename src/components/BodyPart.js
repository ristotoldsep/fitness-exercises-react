import { Stack, Typography } from '@mui/material'
import React from 'react'

import Icon from '../assets/icons/gym.png'


const BodyPart = ({ item, setBodyPart, bodyPart, setSearchTerm }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop: bodyPart === item ? '4px solid #ff2625' : '',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '270px',
          height: '280px',
          cursor: 'pointer',
          gap: '47px'
          } 
        }
        onClick={() => {
          setSearchTerm('');
          setBodyPart(item);
          window.scrollTo({top: 1600, behavior: 'smooth'})
        }}
    >
        <img src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}} />
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart