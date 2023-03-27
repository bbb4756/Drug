import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from '../component/Header.jsx';

function Main() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <Header />

      <ContentBox>
        <ContentImg>
          <span style={{ fontSize: 30, fontWeight: 500, alignSelf: 'center' }}>
            당신의 약을 알아보세요.
          </span>
          <Img
            width={400}
            height={400}
            alt=""
            src="http://localhost:3000/img/drug.png"
          />
        </ContentImg>
        <SearchBox>
          <IndividualBox
            onClick={() => {
              navigate('/search/pill');
            }}
          >
            <span>약 이름으로{'\n'}검색하기</span>
          </IndividualBox>
          <IndividualBox
            onClick={() => {
              navigate('/search/symptom');
            }}
          >
            <span>
              증상으로{'\n'}
              검색하기
            </span>
          </IndividualBox>
          <IndividualBox
            onClick={() => {
              navigate('/search/image');
            }}
          >
            <span>
              약 사진으로{'\n'}
              검색하기
            </span>
          </IndividualBox>
        </SearchBox>
      </ContentBox>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f6f7;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 1600px;
  margin-top: 80px;
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentImg = styled.div`
  width: 98%;
  height: 400px;
  background-image: linear-gradient(
      54deg,
      rgba(255, 131, 122, 0.25),
      rgba(255, 131, 122, 0) 28%
    ),
    linear-gradient(
      241deg,
      rgba(239, 152, 207, 0.25),
      rgba(239, 152, 207, 0) 36%
    );
  display: flex;
  justify-content: space-evenly;
`;

const Img = styled.img`
  margin: 4px 12px 0 0;
  cursor: pointer;
`;

const SearchBox = styled.div`
  margin-top: 100px;
  width: 70%;
  height: 400px;
  /* background-color: green; */
  display: flex;
  justify-content: space-around;
`;

const IndividualBox = styled.div`
  width: 25%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c8c8c8;
  border-radius: 50px;
  cursor: pointer;
  > span {
    font-size: 30px;
    font-weight: 600;
    display: block;
    text-align: center;
    white-space: pre-wrap;
    height: auto;
    line-height: 50px;
  }
`;
