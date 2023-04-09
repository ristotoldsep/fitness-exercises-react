import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises, target, equipment }) => {
  return (
    <Box sx={{mt: { lg: '100px', xs: '0'}, mb: '100px'}}>
      <Typography variant="h3" mb={5}>
        Other exercises that target the <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{target}</span> muscle group 
      </Typography>
      <Stack sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ?
         <HorizontalScrollbar data={targetMuscleExercises} />
        : <Loader />
        }
      </Stack>
      
      <Typography variant="h3" mb={5} mt={10}>
        Other exercises that use <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{equipment}</span> as equipment
      </Typography>
      <Stack sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ?
         <HorizontalScrollbar data={equipmentExercises} />
        : <Loader />
        }
      </Stack>

    </Box>
  )
}

export default SimilarExercises