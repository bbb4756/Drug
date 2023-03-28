import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../component/Header';

const Searching2 = () => {
  const [search, setSearch] = useState('');

  const [result, setResult] = useState([]);
  const onChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  const onSearch = value => {
    console.log('검색어는', value);
  };

  return (
    <MainContainer>
      <Header />
      <SearchContainer>
        <SearchTitle>
          <span>💊 증상으로 검색하기</span>
        </SearchTitle>
        <Form
          onSubmit={e => {
            e.preventDefault();
            console.log(search);
            onSearch(search);
          }}
        >
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder={'검색어를 입력하세요.'}
            style={{
              width: '900px',
              height: '40px',
              borderRadius: '10px',
              borderWidth: 0.5,
              borderColor: '#efefef',
            }}
          />
          <button
            style={{
              color: '#EDEDED',
              width: '100px',
              height: '40px',
              borderRadius: '10px',
              background: '#949BA0',
              borderWidth: 0.5,
              borderColor: '#dcdcdc',
            }}
            type="submit"
          >
            찾기
          </button>
        </Form>
        {/* 검색결과 */}
        <SearchBox>
          <span>검색 결과 나오는 부분</span>
        </SearchBox>
      </SearchContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f5f6f7;
  position: relative;
`;

const SearchTitle = styled.div`
  width: 80%;
  height: 100px;
  /* background-color: green; */
  margin: 0 auto;

  > span {
    font-size: 30px;
    font-weight: 600;
    display: block;
    /* text-align: center; */
    line-height: 90px;
    padding-left: 30px;
  }
`;
const SearchBox = styled.div`
  width: 80%;
  height: 500px;
  background-color: #efefef;
  margin: 0 auto;
`;

const Form = styled.form`
  width: 80%;
  height: 80px;
  /* background: red; */
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 90%;
  height: 600px;
  /* background-color: orange; */

  margin: 0 auto;
  margin-top: 100px;
`;
export default Searching2;
