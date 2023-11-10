import React, { useState } from "react";
import { Container, Title, ButtonSigns, Input, ButtonSend } from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";
import axios from "axios";

function Start() {
  const [name, setName] = useState("");
  const [letter, setLetter] = useState("");
  const [writeSendComplete, setWriteSendComplete] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLetterChange = (event) => {
    setLetter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    const userData = {
      writer: name, // 변수명 수정
      message: letter, // 변수명 수정
      photoIdList: [], // 아직 photoIdList가 어디에서 왔는지는 코드에서 확인되지 않았습니다.
    };

    console.log(userData);

    try {
      const response = await axios.post(
        "/api/v1/kureomi/{uniqueUrl}/create",
        userData, // 수정된 부분
        { withCredentials: true }
      );

      console.log(response.status);

      if (response.status === 201) {
        console.log("전송 완료");
        setWriteSendComplete(true);
        console.log(response.data);
      } else {
        console.log("전송 실패");
      }
    } catch (error) {
      console.log("오류 발생 : ", error);
    }
  };

  const textareaStyle = {
    width: "100%",
    maxWidth: "80%",
    height: "200px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    resize: "vertical",
    background: "rgba(255, 255, 255, 0.50)",
    outline: "none",
    margin: "30px",
    fontfamily: "SUITE",
  };

  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/Login">로그인|</Link>{" "}
          <Link to="/SignUpName">회원가입</Link>{" "}
        </ButtonSigns>
        <Title>김지은님의 홈</Title>
        <form onSubmit={handleSubmit}>
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
          <ButtonSend type="submit">
            <Link to="/VisitSend">보내기</Link>{" "}
          </ButtonSend>
        </form>
      </Container>
    </BackGround>
  );
}

export default Start;
