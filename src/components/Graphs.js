import React from "react";
import styled from "styled-components";
import GraphImg from "../assets/img/graph-graphic.png";
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
  padding: 128px 0;
  @media (max-width: 900px) {
    padding: 80px 0;
  }
  @media (max-width: 0px) {
    padding: 0 0;
  }
  @media (max-width: 660px) {
    justify-content: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 320px 0 0;
  @media (max-width: 1920px) {
    padding: 0 256px 0 0;
  }
  @media (max-width: 1660px) {
    padding: 0 128px 0 0;
  }
  @media (max-width: 1360px) {
    padding: 0 64px 0 0;
  }
  @media (max-width: 1080px) {
    padding: 0 32px 0 0;
  }
  @media (max-width: 900px) {
    padding: 0 16px 0 0;
  }
  @media (max-width: 660px) {
    display: none;
  }
`;

const ContentMobile = styled.div`
  display: none;
  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 320px;
  @media (max-width: 1920px) {
    padding-left: 256px;
  }
  @media (max-width: 1660px) {
    padding-left: 128px;
  }
  @media (max-width: 1360px) {
    padding-left: 64px;
  }
  @media (max-width: 1080px) {
    padding-left: 32px;
  }
  @media (max-width: 900px) {
    padding-left: 16px;
  }
  @media (max-width: 0px) {
    padding-left: 16px;
    margin-right: 16px;
  }
  @media (max-width: 660px) {
    justify-content: flex-start;
    margin-bottom: 16px;
  }
`;

const Title = styled.p`
  font-family: JostMedium;
  font-size: 48px;
  color: #101010;
  margin: 0 0 32px 0;
  @media (max-width: 1920px) {
    max-width: 560px;
  }
  @media (max-width: 1360px) {
    font-size: 36px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
  }
  @media (max-width: 660px) {
    margin: 0 0 16px 0;
    line-height: 1.25em;
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
  @media (max-width: 900px) {
    max-width: 300px;
  }
`;

const FeaturesGraphicImg = styled.img`
  height: auto;
  width: 600px;
  @media (max-width: 1360px) {
    width: 500px;
  }
  @media (max-width: 1080px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    height: auto;
    width: 300px;
  }
  @media (max-width: 0px) {
    margin: 0;
    width: 75%;
    height: auto;
    padding: 32px 0 0 0;
  }
  @media (max-width: 660px) {
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

function Graphics() {
  return (
    <Wrapper>
      <Content>
        <Fade>
          <TitleContainer>
            <Title>Progression is key</Title>
            <FeatureText>
              Spotter helps you keep track of your progress with simple and
              accessible data visualization.
            </FeatureText>
          </TitleContainer>
        </Fade>
        <Slide right>
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={GraphImg} />
          </FeatureMobileDiv>
        </Slide>
      </Content>
      <ContentMobile>
        <Fade>
          <TitleContainer>
            <Title>Progression is key</Title>
            <FeatureText>
              Spotter helps you keep track of your progress with simple and
              accessible data visualization.
            </FeatureText>
          </TitleContainer>
        </Fade>
        <Slide right>
          <FeatureMobileDiv>
            <FeaturesGraphicImg src={GraphImg} />
          </FeatureMobileDiv>
        </Slide>
      </ContentMobile>
    </Wrapper>
  );
}

export default Graphics;
