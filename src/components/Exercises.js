import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material/' 

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({ exercises, setExercises, bodyPart, searchTerm}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  //e and value gets added bts by material ui
  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();

  }, [bodyPart])

  console.log(exercises);

  return (
    <Box id="exercises" sx={{
      mt: { lg: '110px' }}} mt="50px" p="20px"
    >
    <Typography variant="h3" mb="45px" textAlign="center">
      Showing Results for "{searchTerm ? searchTerm : bodyPart}" ({exercises.length}):
    </Typography>
    <Stack direction="row" sx={{ gap: {lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
      {currentExercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </Stack>
    <Stack mt="100px" alignItems="center">
      {exercises.length > exercisesPerPage && (
        <Pagination
          color="standard"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </Stack>
   </Box>
  )
}

export default Exercises