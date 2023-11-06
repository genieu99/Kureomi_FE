import React, { useState } from "react";
import { Container, Title, ButtonNext } from "./Style";
import { Link } from "react-router-dom";

function Start() {
  const [email, setEmail] = useState(""); // 이메일 상태 변수를 사용하여 입력된 이메일을 추적

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // 입력된 이메일을 상태 변수에 업데이트
  };

  return (
    <Container>
      <Title>이메일 주소를 알려주세요</Title>

      {/* 이메일 입력 창을 추가 */}
      <input
        type="email"
        placeholder="이메일 주소를 입력해주세요"
        value={email}
        onChange={handleEmailChange}
      />

      <ButtonNext>
        <Link to="/signuppw">
          <h1>다음</h1>
        </Link>{" "}
      </ButtonNext>
    </Container>
  );
}

export default Start;
