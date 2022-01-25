import React, { Component } from 'react';
import styled from 'styled-components';
import DesktopSpreadsheet from '../assets/img/desktop-spreadsheet.png';
import iPhoneWorkout from '../assets/img/iphone-workout.png';
import AndroidBodyweight from '../assets/img/android-bodyweight.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 900px;
  width: 100%;
  max-width: 1920px;
  background-color: #fff;
  @media (max-width: 1080px){
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 440px){
    height: auto;
    padding: 0 0 80px 0;
  }
`;

const Content = styled.div`
  padding: 0 192px;
`;

const Title = styled.h1`
  font-family: JostBold;
  font-size: 72px;
  color: #fff;
  line-height: 1.25em;
  margin: 0;
  @media (max-width: 440px){
    font-size: 48px;
    line-height: 1em;
    letter-spacing: -1.5px;
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
  margin-left: 128px;
  @media (max-width: 1280px){
    margin-left: 64px;
  }
  @media (max-width: 1080px){
    margin-bottom: 80px;
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
  margin-right: 128px;
  @media (max-width: 1280px){
    margin-right: 16px;
  }
  @media (max-width: 1080px){
    margin-bottom: 80px
  }
  @media (max-width: 440px){
    margin: 80px 0 0 0;
  }
`;

const PhonesImgDiv = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0 0 64px 10%;
  @media (max-width: 1080px){
    margin: 0 0 32px 128px;
  }
  @media (max-width: 440px){
    margin: 0 0 32px 0;
    padding: 0 0 0 32px;
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
  }
  @media (max-width: 768px){
    width: 75%;
  }
  @media (max-width: 440px){
    width: 300px;
    height: auto;
    margin: 80px 0 32px 0;
  }
`;

const IPhoneWorkoutImg = styled.img`
  height: 500px;
  width: auto;
  margin: 0 0 64px 0;
  position: relative;
  left: -10%;
  @media (max-width: 1600px){
    width: 200px;
    height: auto;
  }
  @media (max-width: 1080px){
    width: 180px;
    height: auto;
  }
`;

const AndroidBodyweightImg = styled.img`
  height: 500px;
  width: auto;
  @media (max-width: 1600px){
    width: 200px;
    height: auto;
  }
  @media (max-width: 1080px){
    width: 180px;
    height: auto;
  }
`;

function Transformation() {
  return (
    <Wrapper>
      <SpreadsheetContainer>
        <DesktopSpreadsheetImg src={DesktopSpreadsheet} />
        <Subtitle>Spotter takes multiple formulas, numbers, tables of data...</Subtitle>
      </SpreadsheetContainer>
      <PhonesContainer>
        <PhonesImgDiv>
          <AndroidBodyweightImg src={AndroidBodyweight} />
          <IPhoneWorkoutImg src={iPhoneWorkout} />
        </PhonesImgDiv>
        <Subtitle>... and turns them into simple graphs and components.</Subtitle>
      </PhonesContainer>
    </Wrapper>
  );
}

export default Transformation;
