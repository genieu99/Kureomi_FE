import React, { useState } from "react";
import { Container, Title, SubTitle, ButtonNext, Input } from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const [password, setPassword] = useState(""); // 비밀번호 상태 변수를 사용하여 입력된 비밀번호를 추적

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // 입력된 비밀번호를 상태 변수에 업데이트
  };

  return (
    <BackGround>
      <Container>
        <Title>비밀번호를 입력해주세요</Title>

        {/* 비밀번호 입력 창을 추가, 입력되는 비밀번호는 별표로 처리 */}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePasswordChange}
        />

        <ButtonNext>
          <Link to="/SignUpSucess">확인</Link>{" "}
        </ButtonNext>
      </Container>
    </BackGround>
  );
}

export default Start;
