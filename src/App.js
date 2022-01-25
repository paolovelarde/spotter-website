import React, { Component } from 'react';
import Home from './components/Home';
import Features from './components/Features';
import WhySpotter from './components/WhySpotter';
import Transformtion from './components/Transformation';
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
      <Transformtion />
    </Wrapper>
  );
}

export default App;
