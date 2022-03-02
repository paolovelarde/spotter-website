import React from "react";
import styled from "styled-components";
import SpotterLogo from "../assets/img/spotter-logo.png";
import { ReactComponent as SpotterSVG } from "../assets/img/title-logo.svg";
import PhoneBackground from "../assets/img/phone-bg.png";
import PhoneBackgroundMobile from "../assets/img/phone-bg-mobile.png";
import PhoneBackgroundSmall from "../assets/img/phone-bg-small.png";
import ReactTooltip from "react-tooltip";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ReactGA from "react-ga";

const FadeWrapper = styled.div`
  width: 100%;
  background-color: #eaecf1;
  max-width: 1920px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 829px;
  width: 100%;
  max-width: 1920px;
  background-image: url(${PhoneBackground});
  background-position: center center;
  background-size: 2156px auto;
  @media (max-width: 1080px) {
    background-position: 75% 50%;
    background-size: 1600px auto;
    background-image: url(${PhoneBackgroundSmall});
    background-repeat: no-repeat;
  }
  @media (max-width: 900px) {
    background-position: bottom;
    background-size: 900px auto;
    background-image: url(${PhoneBackgroundMobile});
    justify-content: none;
    height: 640px;
  }
  @media (max-width: 660px) {
    background-position: 40%;
    background-size: cover;
    background-image: url(${PhoneBackgroundMobile});
    justify-content: none;
  }
`;

const LogoDiv = styled.div`
  width: 100%;
`;

const Logo = styled.img`
  height: 36px;
  width: auto;
  padding: 80px 0 0 0;
  margin: 0;
  position: absolute;
  @media (max-width: 1360px) {
    height: 30px;
  }
  @media (max-width: 900px) {
    width: auto;
    position: static;
    padding: 0 0 32px 0;
  }
  @media (max-width: 660px) {
    height: 24px;
    margin-bottom: 80px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
    padding: 32px 16px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  @media (max-width: 660px) {
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-family: JostMedium;
  font-size: 72px;
  color: #101010;
  margin: 0 0 48px 0;
  line-height: 1.25em;
  @media (max-width: 1360px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 48px;
    line-height: 1em;
    letter-spacing: -1.5px;
  }
  @media (max-width: 660px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17, 17, 17, 0.85);
  margin: 0;
  width: 120px;
  text-align: center;
  @media (max-width: 660px) {
    font-size: 16px;
    width: 128px;
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 0px) {
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
                {/* <SpotterSVG style={{ 'width': 'auto', 'height': '24px', 'margin': '0', 'padding': '80px 0 0 0' }} /> */}
              </Fade>
            </LogoDiv>
            <TitleContainer>
              <Fade>
                <Title>
                  Fitness <br />
                  made simple
                </Title>
                <Slide left>
                  <DownloadButton
                    data-tip
                    data-for="download"
                    data-place="bottom"
                    data-type="light"
                    onClick={() =>
                      ReactGA.event({
                        category: "Download",
                        action: "Attempt to download",
                      })
                    }
                  >
                    Download
                  </DownloadButton>
                  <ReactTooltip id="download" type="warning" effect="solid">
                    <Subtitle>Coming soon!</Subtitle>
                  </ReactTooltip>
                </Slide>
              </Fade>
            </TitleContainer>
          </Content>
        </Wrapper>
      </Fade>
    </FadeWrapper>
  );
}

export default Home;
