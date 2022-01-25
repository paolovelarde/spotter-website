import React, { Component, useState } from 'react';
import styled from 'styled-components';
import CheckPointImg from '../assets/img/check-point.png';
import FeaturesImg from '../assets/img/features-graphic.png';

const featuresList = [
  'Feature1',
  'Feature2',
  'Feature3',
  'Feature4'
];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 900px;
  width: 100%;
  max-width: 1920px;
  background-color: #fff;
  @media (max-width: 1600px){
    height: 720px;
  }
  @media (max-width: 1080px){
    height: auto;
  }
  @media (max-width: 440px){
    justify-content: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 0 0 192px;
  @media (max-width: 1280px){
    padding: 0 0 0 128px;
  }
  @media (max-width: 1080px){
    padding: 80px 0 80px 64px;
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
    font-size: 30px;
    margin: 0 0 16px 0;
  }
  @media (max-width: 440px){
    margin: 0 0 16px 0;
    letter-spacing: -1.5px;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 24px 0;
  @media (max-width: 1080px){
    margin: 0 0 16px 0;
  }
`;

const FeatureText = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17,17,17,0.85);
  margin: 0;
  @media (max-width: 1080px){
    font-size: 16px;
  }
`;

const CheckPoint = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 12px 0 0;
  @media (max-width: 1080px){
    height: 16px;
    width: 16px;
    margin: 0 8px 0 0;
  }
`;

const FeaturesGraphicImg = styled.img`
  height: 804px;
  width: 800px;
  margin: 0 128px 0 0;
  @media (max-width: 1600px){
    height: 603px;
    width: 600px;
    margin: 0 128px 0 0;
  }
  @media (max-width: 1280px){
    height: 535.94px;
    width: 533.28px;
    margin: 0 80px 0 0;
  }
  @media (max-width: 1080px){
    margin: 0 16px 0 0;
  }
  @media (max-width: 900px){
    height: 402px;
    width: 400px;
  }
  @media (max-width: 768px){
    margin: 0;
    width: 75%;
    height: auto;
    padding: 16px 0 0 0;
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

function Features() {

  const [features, setFeature] = useState(featuresList);

  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title>Features include:</Title>
          <FeatureList>
            <FeatureItem>
              <CheckPoint src={CheckPointImg} />
              <FeatureText>Free and custom workout routines</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <CheckPoint src={CheckPointImg} />
              <FeatureText>Calorie counter</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <CheckPoint src={CheckPointImg} />
              <FeatureText>Cardio tracking</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <CheckPoint src={CheckPointImg} />
              <FeatureText>Exercise stats and more</FeatureText>
            </FeatureItem>
          </FeatureList>
        </TitleContainer>
        <FeatureMobileDiv>
          <FeaturesGraphicImg src={FeaturesImg} />
        </FeatureMobileDiv>
      </Content>
    </Wrapper>
  );
}

export default Features;
