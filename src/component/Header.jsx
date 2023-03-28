import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <MainHeader>
      <Link to="/">
        <Img
          width={200}
          height={80}
          alt=""
          src="http://localhost:3000/img/logo.png"
        />
      </Link>
      <MenuBox>
        <IndividualMenu
          onClick={() => {
            navigate('/mypage');
          }}
        >
          마이페이지
        </IndividualMenu>
        <IndividualMenu
          onClick={() => {
            navigate('/signin');
          }}
        >
          로그인
        </IndividualMenu>
        <IndividualMenu
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </IndividualMenu>
      </MenuBox>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  width: 98%;
  height: 80px;
  position: fixed;
  top: 0;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  width: 25%;
  height: 100%;
  /* background-color: yellow; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IndividualMenu = styled.span`
  display: block;
  width: 30%;
  height: 50%;
  /* background-color: purple; */
  text-align: center;
  font-size: 20px;
  line-height: 36px;
  cursor: pointer;
`;

const Img = styled.img`
  margin: 4px 12px 0 0;
  cursor: pointer;
`;
export default Header;
