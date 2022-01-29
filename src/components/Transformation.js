import React from 'react';
import styled from 'styled-components';
import DesktopSpreadsheet from '../assets/img/desktop-spreadsheet.png';
import PhonesGraphic from '../assets/img/phones-graphic.png';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: auto;
  width: 100%;
  max-width: 1920px;
  background-color: #fff;
  @media (max-width: 1080px){
    flex-direction: column;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin: 128px 0;
  @media (max-width: 1080px){
    flex-direction: column;
    align-items: center;
    margin: 80px 0;
  }
  @media (max-width: 440px){
    margin: 64px 0;
  }
`;

const Subtitle = styled.p`
  font-family: JostRegular;
  font-size: 20px;
  color: rgba(17,17,17,1);
  margin: 0;
  text-align: center;
  @media (max-width: 1280px){
    font-size: 16px;
  }
  @media (max-width: 440px){
    font-size: 16px;
    margin: 0 32px;
  }
`;

const SpreadsheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media (max-width: 1280px){
    margin-left: 64px;
  }
  @media (max-width: 1080px){
    margin-bottom: 80px;
    margin-left: 0;
  }
  @media (max-width: 440px){
    margin: 0;
  }
`;

const PhonesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  @media (max-width: 440px){
    margin: 80px 0 0 0;
  }
`;

const DesktopSpreadsheetImg = styled.img`
  width: 600px;
  height: auto;
  margin: 63.75px 0 64px 0;
  @media (max-width: 1600px){
    width: 450px;
    height: auto;
    margin: 80px 0 32px 0;
  }
  @media (max-width: 1080px){
    width: 400px;
    height: auto;
    margin: 0 0 32px 0;
  }
  @media (max-width: 768px){
    width: 75%;
  }
  @media (max-width: 440px){
    width: 300px;
    height: auto;
    margin: 0 0 32px 0;
  }
`;

const PhonesGraphicImg = styled.img`
  width: 480px;
  height: auto;
  margin: 63.75px 0 64px 0;
  @media (max-width: 1600px){
    width: 360px;
    margin: 80px 0 32px 0;
  }
  @media (max-width: 768px){
    width: 70%;
  }
  @media (max-width: 440px){
    width: 300px;
    height: auto;
    margin: 0 0 32px 0;
  }
`;

function Transformation() {
  return (
    <Wrapper>
      <Fade>
        <Content>
          <SpreadsheetContainer>
            <DesktopSpreadsheetImg src={DesktopSpreadsheet} />
            <Subtitle>Spotter takes multiple formulas, numbers, tables of data...</Subtitle>
          </SpreadsheetContainer>
          <PhonesContainer>
            <PhonesGraphicImg src={PhonesGraphic} />
            <Subtitle>... and turns them into simple graphs and components.</Subtitle>
          </PhonesContainer>
        </Content>
      </Fade>
    </Wrapper>
  );
}

export default Transformation;
