import React from 'react';
import styled from 'styled-components';
import FuchsiaGradient from '../assets/img/fuchsia-gradient.jpg';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';

const styles = {
  parallax: {
    'width': '100%',
    'max-width': '1920px',
    'background-color': '#3cc6f8'
  },
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  @media (max-width: 1360px){
    height: 240px;
  }
  @media (max-width: 900px){
    height: 180px;
  }
`;

const Title = styled.p`
  font-family: JostMedium;
  font-size: 72px;
  color: #fff;
  line-height: 1.25em;
  margin: 0;
  letter-spacing: 2.5px;
  @media (max-width: 1360px){
    font-size: 60px;
  }
  @media (max-width: 900px){
    font-size: 48px;
    line-height: 1em;
    letter-spacing: -0.25px;
  }
`;

function WhySpotter() {
  return (
    <Parallax strength={200} style={styles.parallax}>
      <Content>
        <Fade>
          <Title>Why Spotter?</Title>
        </Fade>
      </Content>
    </Parallax>
  );
}

export default WhySpotter;
