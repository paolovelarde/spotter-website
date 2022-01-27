import React, { Component } from 'react';
import styled from 'styled-components';
import SpotterLogo from '../assets/img/spotter-logo.png';
import PhoneBackground from '../assets/img/phone-bg.png';
import PhoneBackgroundMobile from '../assets/img/phone-bg-mobile.png';
import PhoneBackgroundSmall from '../assets/img/phone-bg-small.png';
import ReactTooltip from 'react-tooltip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const FadeWrapper = styled.div`
  width: 100%;
  background-color: #eaecf1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 900px;
  width: 100%;
  max-width: 1920px;
  background-image: url(${PhoneBackground});
  background-position: left;
  background-size: 2160px auto;
  @media (max-width: 1600px){
    background-size: cover;
    height: 720px;
  }
  @media (max-width: 1280px){
    height: 640px;
  }
  @media (max-width: 1080px){
    background-position: 75% 100%;
    background-size: 150%;
    background-image: url(${PhoneBackgroundSmall});
  }
  @media (max-width: 768px){
    background-position: 15% 100%;
    background-size: 900px auto;
    background-image: url(${PhoneBackgroundMobile});
    justify-content: none;
  }
  @media (max-width: 440px){
    background-position: 40%;
    background-size: cover;
    background-image: url(${PhoneBackgroundMobile});
    justify-content: none;
  }
`;

const LogoDiv = styled.div`
  width: 100%
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
  padding: 80px 0 0 0;
  margin: 0;
  position: absolute;
  @media (max-width: 1600px){
    height: 20px;
  }
  @media (max-width: 768px){
    height: 20px;
    width: auto;
    position: static;
    padding: 0;
    margin-bottom: 108px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0 0 192px;
  @media (max-width: 1280px){
    padding: 0 0 0 128px;
  }
  @media (max-width: 1080px){
    padding: 0 0 0 64px;
  }
  @media (max-width: 768px){
    padding: 64px 16px;
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
  font-size: 72px;
  color: #101010;
  margin: 0 0 48px 0;
  line-height: 1.25em;
  @media (max-width: 1600px){
    font-size: 60px;
  }
  @media (max-width: 1080px){
    font-size: 48px;
    line-height: 1em;
    margin: 0 0 32px 0;
  }
  @media (max-width: 440px){
    font-size: 42px;
    line-height: 1em;
    letter-spacing: -1.5px;
  }
`;

const Subtitle = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17,17,17,0.85);
  margin: 0;
  width: 120px;
  text-align: center;
  @media (max-width: 440px){
    font-size: 16px;
    width: 96px;
  }
`;

const DownloadButton = styled.div`
  font-family: JostMedium;
  font-size: 20px;
  color: #fff;
  background-color: #101010;
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
  @media (max-width: 1080px){
    font-size: 16px;
  }
`;

function Home() {
  return (
    <FadeWrapper>
      <Fade>
        <Wrapper>
          <Content>
            <LogoDiv>
              <Fade>
                <Logo src={SpotterLogo} />
              </Fade>
            </LogoDiv>
            <TitleContainer>
              <Slide left>
                <Title>Fitness <br />made simple</Title>
                <DownloadButton data-tip data-for='download' data-place='bottom' data-type='light'>Download</DownloadButton>
                <ReactTooltip id='download' type='warning' effect='solid'>
                  <Subtitle>Coming soon!</Subtitle>
                </ReactTooltip>
              </Slide>
              {/* <Subtitle>Available for Android and iOS</Subtitle> */}
            </TitleContainer>
          </Content>
        </Wrapper>
      </Fade>
    </FadeWrapper>
  );
}

export default Home;
