import React, { useState } from "react";
import {
  Container,
  Title,
  SubTitle,
  ButtonNext,
  ButtonSigns,
  Input,
  TextInput,
  ButtonSend,
} from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const [name, setName] = useState(""); // 이름을 추적하는 상태 변수
  const [letter, setLetter] = useState(""); // 편지 내용을 추적하는 상태 변수

  const handleNameChange = (event) => {
    setName(event.target.value); // 이름 입력을 상태 변수에 업데이트
  };

  const handleLetterChange = (event) => {
    setLetter(event.target.value); // 편지 내용을 상태 변수에 업데이트
  };

  const textareaStyle = {
    width: "100%",
    maxWidth: "80%",
    height: "200px" /* 원하는 높이로 설정하세요 */,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    resize: "vertical" /* 사용자가 수직으로만 리사이즈 가능하도록 설정 */,
  };
  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/Login">로그인|</Link>{" "}
          <Link to="/SignUpName">회원가입</Link>{" "}
        </ButtonSigns>
        <Title>김지은님의 홈</Title>
        <Input
          type="text"
          placeholder="이름을 알려주세요! (닉네임도 좋아요)"
          value={name}
          onChange={handleNameChange}
        />
        <textarea
          style={textareaStyle}
          placeholder="편지를 입력해주세요"
          value={letter}
          onChange={handleLetterChange}
        />
        <ButtonSend>
          <Link to="/VisitSend">보내기</Link>{" "}
        </ButtonSend>
      </Container>
    </BackGround>
  );
}

export default Start;
