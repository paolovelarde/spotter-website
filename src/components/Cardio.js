import React from 'react';
import styled from 'styled-components';
import CardioImg from '../assets/img/cardio-graphic.png';
import Slide from 'react-reveal/Slide';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 1920px;
  background-color: #fff;
  overflow: hidden;
  padding: 128px 0;
  @media (max-width: 1600px){
    padding: 80px 0;
  }
  @media (max-width: 768px){
    padding: 0 0;
  }
  @media (max-width: 440px){
    justify-content: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 192px;
  @media (max-width: 1280px){
    padding: 0 0 0 128px;
  }
  @media (max-width: 1080px){
    padding: 0 0 0 64px;
  }
  @media (max-width: 768px){
    padding: 64px 16px;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  @media (max-width: 440px){
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-family: JostMedium;
  font-size: 48px;
  color: #101010;
  margin: 0 0 32px 0;
  @media (max-width: 1600px){
    font-size: 36px;
  }
  @media (max-width: 1080px){
    font-size: 34px;
    margin: 0 0 16px 0;
  }
  @media (max-width: 440px){
    max-width: 320px;
    line-height: 1.25em;
    margin: 0 0 16px 0;
    letter-spacing: -1.5px;
  }
`;

const FeatureText = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17,17,17,0.85);
  margin: 0 0 32px 0;
  max-width: 400px;
  @media (max-width: 1080px){
    max-width: 320px;
    font-size: 16px;
    margin: 0 0 16px 0;
  }
`;

const FeaturesGraphicImg = styled.img`
  height: auto;
  width: 640px;
  margin: 0 192px 0 0;
  @media (max-width: 1600px){
    height: auto;
    width: 480px;
  }
  @media (max-width: 1280px){
    margin: 0 80px 0 0;
  }
  @media (max-width: 1080px){
    height: auto;
    width: 400px;
    margin: 0 64px 0 0;
  }
  @media (max-width: 900px){
    height: auto;
    width: 320px;
  }
  @media (max-width: 768px){
    margin: 0;
    width: 75%;
    height: auto;
    padding: 32px 0 0 0;
  }
  @media (max-width: 440px){
    width: 100%;
  }
`;

const FeatureMobileDiv = styled.div`
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

function Cardio() {

  return (
    <Wrapper>
      <Content>
        <Slide left>
          <TitleContainer>
            <Title>Built in cardio tracking</Title>
            <FeatureText>Track your cardio and keep track of your progress.</FeatureText>
            <FeatureText>Whether you're biking or going for a jog.</FeatureText>
          </TitleContainer>
        </Slide>
        <Slide right>
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={CardioImg} />
          </FeatureMobileDiv>
        </Slide>
      </Content>
    </Wrapper>
  );
}

export default Cardio;
