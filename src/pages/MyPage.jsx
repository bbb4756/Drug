import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../component/Header.jsx';
import { width } from '@mui/system';

export const MyPage = () => {
  return (
    <MainContainer>
      <Header />
      <ContentBox>
        <TitleBox>
          <span> 내 정보 </span>
        </TitleBox>
        <IndividualBox>
          <MiniTitle>
            <span>이름</span>
          </MiniTitle>
          <MiniInfo>
            <span>어쩌고</span>
          </MiniInfo>
        </IndividualBox>
        <IndividualBox>
          <MiniTitle>
            <span>아이디</span>
          </MiniTitle>
          <MiniInfo>
            <span>어쩌고</span>
          </MiniInfo>
        </IndividualBox>
        <IndividualBox>
          <MiniTitle>
            <span>이메일</span>
          </MiniTitle>
          <MiniInfo>
            <span>어쩌고</span>
          </MiniInfo>
        </IndividualBox>
        <RegisterPillBox>
          <span>내 약 등록하기</span>
        </RegisterPillBox>
      </ContentBox>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 600px;
  /* background-color: #d3b9eb; */
  position: relative;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  width: 60%;
  height: 400px;
  margin-top: 180px;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 600px;
  height: 100px;
  background-color: #efefef;
  border: 1px solid #dcdcdc;

  > span {
    font-size: 30px;
    font-weight: 600;
    display: block;
    text-align: center;
    line-height: 90px;
  }
`;

const IndividualBox = styled.div`
  width: 600px;
  height: 80px;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  border-right: 0.5px solid #dcdcdc;
  border-left: 0.5px solid #dcdcdc;
  border-bottom: 0.5px solid #dcdcdc;
`;

const MiniTitle = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: purple; */

  border-right: 0.5px solid #dcdcdc;
  > span {
    font-size: 15px;
    display: block;
    text-align: center;
    line-height: 60px;
  }
`;

const MiniInfo = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: orange; */
  > span {
    font-size: 15px;
    display: block;
    text-align: center;
    line-height: 60px;
  }
`;

const RegisterPillBox = styled.div`
  width: 400px;
  height: 80px;
  background-color: #1976d2;
  margin-top: 100px;
  border-radius: 50px;
  > span {
    font-size: 24px;
    font-weight: 400;
    display: block;
    text-align: center;
    line-height: 90px;
    color: #ffffff;
  }
`;
