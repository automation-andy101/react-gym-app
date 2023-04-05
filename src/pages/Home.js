import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExcercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExcercises={setExcercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
      <Exercises
        setExcercises={setExcercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart} 
      />
    </Box>
  )
}

export default Home;
