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
  padding: 128px 0 0 0;
  @media (max-width: 900px){
    padding: 80px 0 0 0;
  }
  @media (max-width: 660px){
    padding: 0;
    justify-content: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 0 0 320px;
  justify-content: space-between;
  @media (max-width: 1920px){
    padding: 0 0 0 256px;
  }
  @media (max-width: 1660px){
    padding: 0 0 0 128px;
  }
  @media (max-width: 1360px){
    padding: 0 0 0 64px;
  }
  @media (max-width: 1080px){
    padding: 0 0 0 32px;
  }
  @media (max-width: 900px){
    padding: 0 0 0 16px;
  }
  @media (max-width: 660px){
    padding: 80px 16px 0 16px;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  margin-right: 320px;
  max-width: 480px;
  @media (max-width: 1920px){
    margin-right: 256px;
  }
  @media (max-width: 1660px){
    margin-right: 128px;
  }
  @media (max-width: 1360px){
    margin-right: 64px;
  }
  @media (max-width: 1080px){
    margin-right: 32px;
  }
  @media (max-width: 900px){
    margin-right: 16px;
  }
  @media (max-width: 660px){
    justify-content: flex-start;
  }
`;

const Title = styled.p`
  font-family: JostMedium;
  font-size: 48px;
  color: #101010;
  margin: 0 0 32px 0;
  @media (max-width: 1360px){
    font-size: 36px;
  }
  @media (max-width: 900px){
    font-size: 30px;
    max-width: 240px;
  }
  @media (max-width: 660px){
    max-width: none;
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
  max-width: 440px;
  @media (max-width: 1360px){
    max-width: 400px;
    font-size: 16px;
    margin: 0 0 16px 0;
  }
  @media (max-width: 900px){
    max-width: 300px;
  }
`;

const FeaturesGraphicImg = styled.img`
  height: auto;
  width: 600px;
  @media (max-width: 1360px){
    width: 500px;
  }
  @media (max-width: 1360px){
    width: 400px;
  }
  @media (max-width: 0px){
    height: auto;
    width: 256px;
  }
  @media (max-width: 0px){
    margin: 0;
    width: 75%;
    height: auto;
    padding: 32px 0 0 0;
  }
  @media (max-width: 660px){
    margin-top: 16px;
    width: 90%;
  }
`;

const FeatureMobileDiv = styled.div`
  @media (max-width: 660px){
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
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={CardioImg} />
          </FeatureMobileDiv>
        </Slide>
        <Slide right>
          <TitleContainer>
            <Title>Built in cardio tracking</Title>
            <FeatureText>Whether you're going for a bike ride or a morning jog, you can start your cardio session with the tap of a button.</FeatureText>
          </TitleContainer>
        </Slide>
      </Content>
    </Wrapper>
  );
}

export default Cardio;
