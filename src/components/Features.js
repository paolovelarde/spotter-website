import React from 'react';
import styled from 'styled-components';
import CheckPointImg from '../assets/img/check-point.png';
import CheckPointRed from '../assets/img/check-point-red.png';
import CheckPointGreen from '../assets/img/check-point-green.png';
import CheckPointViolet from '../assets/img/check-point-violet.png';
import CheckPointDark from '../assets/img/check-point-dark.png';
import FeaturesImg from '../assets/img/features-graphic.png';
import Slide from 'react-reveal/Slide';
import { Fade } from 'react-reveal';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 1920px;
  background-color: #fff;
  overflow: hidden;
  @media (max-width: 660px){
    justify-content: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 128px 320px 0 320px;
  @media (max-width: 1920px){
    padding: 128px 256px 0 256px;
  }
  @media (max-width: 1660px){
    padding: 128px 128px 0 128px;
  }
  @media (max-width: 1360px){
    padding: 128px 64px 0 64px;
  }
  @media (max-width: 1080px){
    padding: 128px 32px 0 32px;
  }
  @media (max-width: 900px){
    padding: 80px 16px 0 16px;
  }
  @media (max-width: 660px){
    display: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  @media (max-width: 660px){
    justify-content: flex-start;
  }
`;

const Title = styled.p`
  font-family: JostMedium;
  font-size: 48px;
  color: #101010;
  margin: 0 0 32px 0;
  max-width: 540px;
  line-height: 1.25em;
  @media (max-width: 1360px){
    font-size: 36px;
  }
  @media (max-width: 900px){
    font-size: 30px;
    max-width: 240px;
  }
  @media (max-width: 660px){
    margin: 0 0 16px 0;
    letter-spacing: -1px;
    max-width: none;
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
  @media (max-width: 0px){
    margin: 0 0 16px 0;
  }
`;

const FeatureText = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17,17,17,0.85);
  margin: 0 0 32px 0;
  max-width: 440px;
  @media (max-width: 1360px){
    font-size: 16px;
    max-width: 400px;
  }
  @media (max-width: 900px){
    max-width: 300px;
  }
`;

const CheckPoint = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 12px 0 0;
  opacity: 0.85;
  @media (max-width: 0px){
    height: 16px;
    width: 16px;
    margin: 0 8px 0 0;
  }
`;

const FeaturesGraphicImg = styled.img`
  height: auto;
  width: 640px;
  @media (max-width: 1360px){
    width: 500px;
  }
  @media (max-width: 1080px){
    width: 400px;
  }
  @media (max-width: 900px){
    width: 300px;
  }
  @media (max-width: 0px){
    margin: 0;
    width: 75%;
    height: auto;
    padding: 16px 0 0 0;
  }
  @media (max-width: 660px){
    width: 100%;
  }
`;

const FeatureMobileDiv = styled.div`
  @media (max-width: 0px){
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const MobileContent = styled.div`
  display: none;
  @media (max-width: 660px){
    display: flex;
    padding: 80px 16px 0 16px;;
    align-items: flex-start;
    flex-direction: column;
  }
`
;

function Features() {

  return (
    <Wrapper>
      <Content>
        <Slide left>
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={FeaturesImg} />
          </FeatureMobileDiv>
        </Slide>
        <Fade>
          <TitleContainer>
            <Title>An all-in-one fitness app</Title>
            <FeatureText>Spotter helps you keep track of your fitness lifestyle with ease, all under one package.</FeatureText>
          </TitleContainer>
        </Fade>
      </Content>
      <MobileContent>
        <Fade>
          <TitleContainer>
            <Title>An all-in-one fitness app</Title>
            <FeatureText>Spotter helps you keep track of your fitness lifestyle with ease, all under one package.</FeatureText>
          </TitleContainer>
        </Fade>
        <Slide right>
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={FeaturesImg} />
          </FeatureMobileDiv>
        </Slide>
      </MobileContent>
    </Wrapper>
  );
}

export default Features;
