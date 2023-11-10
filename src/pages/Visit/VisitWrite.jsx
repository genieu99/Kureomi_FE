import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Title, ButtonSigns, Input, ButtonSend } from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";

import axios from "axios";

function Start() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [letter, setLetter] = useState("");
  const [writeSendComplete, setWriteSendComplete] = useState(false);
  const [photoIdList, setPhotoIdList] = useState([]);

  useEffect(() => {
    // location에서 photoIdList를 추출하여 설정
    if (location.state && location.state.photoIdList) {
      setPhotoIdList(location.state.photoIdList);
    }
  }, [location.state]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLetterChange = (event) => {
    setLetter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // 입력 내용 콘솔 출력
    console.log("작성자:", name);
    console.log("편지 내용:", letter);
    console.log("사진 ID 목록:", photoIdList);

    const userData = new FormData(); // FormData 객체 생성

    userData.append("writer", name);
    userData.append("message", letter);

    // photoIdList를 formData에 추가
    for (let i = 0; i < photoIdList.length; i++) {
      userData.append("photoIdList", photoIdList[i]);
    }

    try {
      const response = await axios.post(
        `/api/v1/kureomi/${uniqueUrl}/create`, // uniqueUrl을 어떻게 처리할지에 대한 수정이 필요
        userData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.status);

      if (response.status === 201) {
        console.log("전송 완료");
        setWriteSendComplete(true);
        console.log("백엔드 응답 데이터:", response.data);
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
