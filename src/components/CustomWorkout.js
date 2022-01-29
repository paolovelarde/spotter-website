import React from 'react';
import styled from 'styled-components';
import CustomWorkoutImg from '../assets/img/custom-workouts-screen.png';
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
  padding: 0 0 0 128px;
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
  margin-right: 192px;
  @media (max-width: 1920px){
    margin: 0 128px;
  }
  @media (max-width: 1280px){
    margin: 0 64px;
  }
  @media (max-width: 768px){
    max-width: 320px;
    margin: 0 16px;
  }
  @media (max-width: 440px){
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-family: JostMedium;
  font-size: 48px;
  color: #101010;
  margin: 0 0 32px 0;
  @media (max-width: 1920px){
    max-width: 560px;
  }
  @media (max-width: 1600px){
    font-size: 36px;
  }
  @media (max-width: 1080px){
    font-size: 34px;
    margin: 0 0 16px 0;
  }
  @media (max-width: 440px){
    margin: 0 0 16px 0;
    letter-spacing: -1.5px;
  }
`;

const FeatureText = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17,17,17,0.85);
  margin: 0 0 32px 0;
  max-width: 640px;
  @media (max-width: 1920px){
    max-width: 560px;
  }
  @media (max-width: 1920px){
    max-width: 480px;
  }
  @media (max-width: 1080px){
    max-width: 440px;
    font-size: 16px;
    margin: 0 0 16px 0;
  }
`;

const FeaturesGraphicImg = styled.img`
  height: auto;
  width: 720px;
  @media (max-width: 1600px){
    height: auto;
    width: 640px;
  }
  @media (max-width: 1280px){
    width: 560px;
  }
  @media (max-width: 1080px){
    height: auto;
    width: 480px;
  }
  @media (max-width: 900px){
    height: auto;
    width: 400px;
  }
  @media (max-width: 768px){
    width: 75%;
    height: auto;
    margin-bottom: 64px;
  }
  @media (max-width: 440px){
    width: 90%;
  }
`;

const FeatureMobileDiv = styled.div`
  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

function CustomWorkout() {

  return (
    <Wrapper>
      <Content>
        <Slide left>
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={CustomWorkoutImg} />
          </FeatureMobileDiv>
        </Slide>
        <Slide right>
          <TitleContainer>
            <Title>Create your own workout routine</Title>
            <FeatureText>Spotter allows you to create your own workout routine with tools that allow for a simple experience.</FeatureText>
            <FeatureText>Share your own personalized workout routine with your friends.</FeatureText>
          </TitleContainer>
        </Slide>
      </Content>
    </Wrapper>
  );
}

export default CustomWorkout;
