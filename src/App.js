import React from 'react';
import Home from './components/Home';
import Features from './components/Features';
import WhySpotter from './components/WhySpotter';
import Transformation from './components/Transformation';
import Workouts from './components/Workouts';
import CustomWorkout from './components/CustomWorkout';
import Cardio from './components/Cardio';
import Calories from './components/Calories';
import Graphs from './components/Graphs';
import Footer from './components/Footer';
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
      <Workouts />
      <CustomWorkout />
      <Calories />
      <Cardio />
      <Graphs />
      <WhySpotter />
      <Transformation />
      <Footer />
    </Wrapper>
  );
}

export default App;
