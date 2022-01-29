import React from 'react';
import Home from './components/Home';
import Features from './components/Features';
import WhySpotter from './components/WhySpotter';
import Transformation from './components/Transformation';
import Workouts from './components/Workouts';
import CustomWorkout from './components/CustomWorkout';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(238, 238, 238);
`;

function App() {
  return (
    <Wrapper>
      <Home />
      <Features />
      <WhySpotter />
      <Transformation />
      <Workouts />
      <CustomWorkout />
    </Wrapper>
  );
}

export default App;
