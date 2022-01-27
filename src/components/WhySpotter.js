import React, { Component } from 'react';
import styled from 'styled-components';
import FuchsiaGradient from '../assets/img/fuchsia-gradient.jpg';
import { Parallax } from 'react-parallax';

const styles = {
  parallax: {
    'width': '100%',
    'max-width': '1920px',
  },
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  @media (max-width: 1600px){
    height: 360px;
  }
  @media (max-width: 1080px){
    height: 240px;
  }
`;

const Title = styled.h1`
  font-family: JostBold;
  font-size: 72px;
  color: #fff;
  line-height: 1.25em;
  margin: 0;
  letter-spacing: 2.5px;
  @media (max-width: 1600px){
    font-size: 60px;
  }
  @media (max-width: 440px){
    font-size: 48px;
    line-height: 1em;
    letter-spacing: -1.5px;
  }
`;

function WhySpotter() {
  return (
    <Parallax bgImage={FuchsiaGradient} strength={200} style={styles.parallax}>
      <Content>
        <Title>Why Spotter?</Title>
      </Content>
    </Parallax>
  );
}

export default WhySpotter;
