import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Swal from 'sweetalert2';
// import blank_image from '../../public/img/blank_image.png';
import loading_pill from '../../src/img/search_pill_waiting.png';
const Searching3 = () => {
  const [search, setSearch] = useState('');
  const [coverName, setCoverName] = useState('');
  const [pillName, setPillName] = useState('waiting...');
  const [isDisabled, setDisabled] = useState(false);
  const coverRef = useRef();
  const imgRef = useRef();
  const imgResRef = useRef();
  const [image, setImage] = useState(loading_pill);

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

  const checkUpload = async e => {
    const formDataImg = new FormData();
    formDataImg.append('cover', e.target.cover.files[0]);
    console.log('완료');
  };

  const readURL = e => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      // coverRef.current.value = e.target.files[0].name;
      setCoverName(e.target.files[0].name);
      reader.onload = function (e) {
        imgRef.current.src = `${e.target.result}`;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const upload = async e => {
    e.preventDefault();

    checkUpload(e);
  };

  return (
    <MainContainer>
      <Header />
      <SearchContainer>
        <SearchTitle>
          <span>📷 이미지로 검색하기</span>
        </SearchTitle>

        <Container>
          <AlbumBox>
            <form encType="multipart/form-data" onSubmit={upload}>
              <UploadBox>
                <ImgUpload>
                  <h3>알약 이미지 첨부</h3>
                  <img
                    id="preview"
                    ref={imgRef}
                    alt="music-cover"
                    src="/img/blank_image.png"
                  />
                  <UploadInput>
                    <input
                      className="file_name"
                      ref={coverRef}
                      value={coverName}
                      disabled
                    />
                    <label htmlFor="album_cover">open</label>
                    <input
                      type="file"
                      name="cover"
                      id="album_cover"
                      accept="image/*"
                      onChange={readURL}
                      src=""
                    />
                    <input type="submit" id="submit" value="검색" />
                  </UploadInput>
                </ImgUpload>
                <ImgResultBox>
                  <h3>검색결과</h3>
                  <img id="preview" ref={imgResRef} src={image} />
                  <span> 약품명 : {pillName} </span>
                </ImgResultBox>
              </UploadBox>
            </form>
          </AlbumBox>
        </Container>
        {/* </SearchBox> */}
      </SearchContainer>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #efefef;
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
export const Container = styled.div`
  width: 80%;
  height: 500px;
  margin: 0 auto;
  margin-top: 40px;
  > h1 {
    margin-top: 60px;
    text-align: center;
    color: #efefef;
    font-family: 'Light';
    font-size: 20px;
  }
  > p {
    margin-top: 60px;
    text-align: center;
    color: #efefef;
    font-family: 'Light';
    font-size: 14px;
  }
`;

export const AlbumBox = styled.div`
  border: 1px solid #646464;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
  > form {
    display: flex;
    height: 450px;
    justify-content: space-around;
    align-items: center;
  }
`;

export const UploadBox = styled.div`
  width: 90%;
  height: 440px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
`;

export const ImgUpload = styled.div`
  border: 0.5px dashed #646464;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: pink; */
  > h3 {
    color: #999999;
    margin: 3px 5px;
    align-self: flex-start;
    font-size: 17px;
    /* background-color: yellow; */
  }
  > img {
    width: 180px;
    height: 180px;
  }
`;

const ImgResultBox = styled.div`
  padding-left: 10px;
  border: 0.5px dashed #646464;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* background-color: red; */
  > h3 {
    color: #999999;
    align-self: flex-start;
    font-size: 17px;
    /* font-family: 'Fly'; */
    /* background-color: green; */
  }
  > img {
    width: 180px;
    height: 180px;
  }
`;

export const UploadInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  height: 30px;
  > .file_name {
    width: 75%;
    font-size: 15px;
    background-color: transparent;
    color: #999999;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  > label {
    color: black;
    background-color: #999999;
    text-align: center;
    font-size: 12.5px;
    /* margin-left: 10px; */
    /* margin-top: 10px; */
    cursor: pointer;
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: keep-all;
    font-family: 'Fly';
  }
  > input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

export const MusicUpload = styled.div`
  width: 100%;
  height: 23%;
  border: 0.5px dashed #646464;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  > h3 {
    color: #999999;
    margin: 0px 10px;
    align-self: flex-start;
    font-size: 17px;
    font-family: 'Fly';
  }
`;

export const AlbumInfo = styled.div`
  border: 0.5px dashed #646464;
  width: 60%;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > h3 {
    color: #999999;
    padding: 0px 10px;
    font-size: 17px;
    font-family: 'Fly';
    margin-top: 10px;
  }
`;

export const AlbumForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: #646464;
  height: 100%;
  #submit {
    border: 0.5px solid #efefef;
    display: inline-block;
    cursor: pointer;
    color: #efefef;
    font-family: 'Fly';
    font-size: 15px;
    width: 25%;
    height: 50px;
    align-self: flex-end;
    margin-right: 10px;
    margin-bottom: 11px;
  }
  #submit:hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    background-color: #efefef;
    color: black;
  }
  #submit:active {
    position: relative;
    top: 1px;
  }
  > input[type='text'] {
    background-color: transparent;
    width: 94%;
    height: 20%;
    padding-left: 5px;
    border-bottom: solid 0.5px #646464;
    font-size: 18px;
  }
  > input[type='text']:focus {
    outline: none;
  }
  > textarea {
    background-color: transparent;
    width: 94%;
    height: 80%;
    outline: none;
    padding: 10px 5px;
    resize: none;
    font-size: 18px;
  }
`;

export default Searching3;
