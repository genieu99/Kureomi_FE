import React, { useState, useRef } from "react";
import { Container, Title, SubTitle, ButtonSelect, ButtonSigns } from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const [selectedFiles, setSelectedFiles] = useState([]); // 사용자가 선택한 파일을 추적
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/Login">로그인|</Link>{" "}
          <Link to="/SignUpName">회원가입</Link>{" "}
        </ButtonSigns>
        <Title>김지은님의 홈</Title>
        <SubTitle>함께 추억하고 싶은 사진을 6장 선택해주세요.</SubTitle>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <ButtonSelect onClick={openFileInput}>사진 선택하기</ButtonSelect>
        {selectedFiles.length > 0 && (
          <div>
            <h2>선택한 파일 목록:</h2>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </BackGround>
  );
}

export default Start;
