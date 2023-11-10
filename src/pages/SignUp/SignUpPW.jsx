import React, { useState } from "react";
import { Container, Title, SubTitle, ButtonNext, Input } from "./Style";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BackGround } from "../Login/Style";
import axios from "axios";

function Start() {
  const [password, setPassword] = useState(""); // 비밀번호 상태 변수를 사용하여 입력된 비밀번호를 추적

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // 입력된 비밀번호를 상태 변수에 업데이트
  };

  const location = useLocation();
  const userName = location.state.userName;
  const email = location.state.email;

  const navigate = useNavigate();

  const isFormValid = () => {
    // 유효성 검사 로직 추가
    return (
      userName.trim() !== "" && email.trim() !== "" && password.trim() !== ""
    );
  };

  const handleNextClick = async () => {
    if (!isFormValid()) {
      // 유효하지 않은 경우 처리
      alert("모든 필수 입력란을 채워주세요.");
      return;
    }

    const userData = {
      userName: userName,
      email: email,
      password: password,
    };

    let request;

    try {
      request = await axios.post(
        "/api/v1/kureomi/signup",
        {
          userName: userName,
          email: email,
          password: password,
        },
        { withCredentials: true }
      );

      // if (request.status ===200) {

      //   console.log("userName:", userName);
      //   console.log("Email:", email);
      //   console.log("Password:", password);
      //   setSignUpComplete(true); // 회원가입 완료 상태를 설정
    } catch (error) {
      console.error("오류 발생:", error);
    }

    const url = request.data;
    navigate("/SignUpSucess", {
      state: {
        url: url,
      },
    });
  };

  return (
    <BackGround>
      <Container>
        <Title>비밀번호를 입력해주세요</Title>

        {/* 비밀번호 입력 창을 추가, 입력되는 비밀번호는 별표로 처리 */}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input
          type="submit"
          onClick={async () => {
            await handleNextClick();
          }}
        >
          {/* <Link to="/SignUpSucess">확인</Link>{" "} */}
        </input>
      </Container>
    </BackGround>
  );
}

export default Start;
