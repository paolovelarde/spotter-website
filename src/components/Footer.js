import React from 'react';
import styled from 'styled-components';
import FuchsiaGradient from '../assets/img/fuchsia-gradient.jpg';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';

const styles = {
  parallax: {
    'width': '100%',
    'max-width': '1920px',
    'background-color': '#101010'
  },
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
  @media (max-width: 900px){
    height: 180px;
  }
`;

const Title = styled.p`
  font-family: JostRegular;
  font-size: 60px;
  color: #fff;
  line-height: 1.5em;
  margin: 0;
  letter-spacing: 2.5px;
  text-align: center;
  @media (max-width: 900px){
    font-size: 36px;
    letter-spacing: -0.25px;
  }
`;

const Subtitle = styled.p`
  font-family: JostRegular;
  font-size: 36px;
  color: #fff;
  line-height: 1.5em;
  margin: 0;
  letter-spacing: 2.5px;
  text-align: center;
  @media (max-width: 900px){
    letter-spacing: -0.25px;
    font-size: 18px;
  }
`;

function Footer() {
  return (
    <Parallax strength={200} style={styles.parallax}>
      <Content>
        <Fade>
          <Subtitle>Coming</Subtitle>
          <Title>Summer 2022</Title>
        </Fade>
      </Content>
    </Parallax>
  );
}

export default Footer;
