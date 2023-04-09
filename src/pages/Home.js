import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState([]);

  let location = useLocation();

  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if(elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start"})
               }          
        } else {
  window.scrollTo({top:0,left:0, behavior: "smooth"})
                }
    }, [location, ])

  return (
    <Box>
        <HeroBanner />
        <SearchExercises 
          setExercises={setExercises} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart}
          search={search}
          setSearch={setSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
       {/*  {
          searchTerm && (
            <Exercises 
            setExercises={setExercises} 
            bodyPart={bodyPart} 
            exercises={exercises}
            searchTerm={searchTerm}
          />    
          )
        } */}
                
                <Exercises 
          setExercises={setExercises} 
          bodyPart={bodyPart} 
          exercises={exercises}
          searchTerm={searchTerm}
        />  
                

          
        
    </Box>
  )
}

export default Home