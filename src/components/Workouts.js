import React from "react";
import styled from "styled-components";
import CheckPointImg from "../assets/img/check-point.png";
import WorkoutsImg from "../assets/img/workouts-graphic.png";
import Slide from "react-reveal/Slide";
import { Fade } from "react-reveal";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  max-width: 1920px;
  background-color: #fff;
  overflow: hidden;
  padding: 128px 0 0 0;
  @media (max-width: 900px) {
    padding: 80px 0 0 0;
  }
  @media (max-width: 660px) {
    justify-content: none;
    padding: 0 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 320px;
  @media (max-width: 1920px) {
    padding: 0 0 0 256px;
  }
  @media (max-width: 1660px) {
    padding: 0 0 0 128px;
  }
  @media (max-width: 1360px) {
    padding: 0 0 0 64px;
  }
  @media (max-width: 1080px) {
    padding: 0 0 0 32px;
  }
  @media (max-width: 900px) {
    padding: 0 0 0 16px;
  }
  @media (max-width: 660px) {
    padding: 80px 16px 0 16px;
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
  max-width: 480px;
  @media (max-width: 660px) {
    justify-content: flex-start;
  }
`;

const Title = styled.p`
  font-family: JostMedium;
  font-size: 48px;
  color: #101010;
  margin: 0 0 32px 0;
  @media (max-width: 1360px) {
    font-size: 36px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
    max-width: 240px;
  }
  @media (max-width: 660px) {
    max-width: 256px;
    line-height: 1.25em;
    margin: 0 0 16px 0;
    letter-spacing: -1.5px;
  }
`;

const FeatureText = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17, 17, 17, 0.85);
  margin: 0 0 32px 0;
  max-width: 440px;
  @media (max-width: 1360px) {
    max-width: 400px;
    font-size: 16px;
    margin: 0 0 16px 0;
  }
  @media (max-width: 1360px) {
    max-width: 320px;
  } ;
`;

const FeaturesGraphicImg = styled.img`
  height: auto;
  width: 540px;
  margin: 0 320px 0 0;
  @media (max-width: 1920px) {
    margin: 0 256px 0 0;
  }
  @media (max-width: 1660px) {
    margin: 0 128px 0 0;
  }
  @media (max-width: 1360px) {
    margin: 0 64px 0 0;
    width: 500px;
  }
  @media (max-width: 1080px) {
    margin: 0 32px 0 0;
    width: 400px;
  }
  @media (max-width: 900px) {
    margin: 0 16px 0 0;
    width: 300px;
  }
  @media (max-width: 660px) {
    margin: 16px 0 0 0;
    width: 100%;
  }
`;

const FeatureMobileDiv = styled.div`
  @media (max-width: 660px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

function Workouts() {
  return (
    <Wrapper>
      <Content>
        <Fade>
          <TitleContainer>
            <Title>Free workout routines</Title>
            <FeatureText>
              Create your own workout routine or use one from our catalogue.
            </FeatureText>
            <FeatureText>For powerlifters, runners, and more.</FeatureText>
          </TitleContainer>
        </Fade>
        <Slide right>
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={WorkoutsImg} />
          </FeatureMobileDiv>
        </Slide>
      </Content>
    </Wrapper>
  );
}

export default Workouts;
