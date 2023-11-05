// Start.js

import React from "react";
import { Container, Title, SubTitle, ButtonNext } from "./Style";
import { Link } from "react-router-dom"; // Link 컴포넌트 추가

function Start() {
  return (
    <Container>
      <Title>비밀번호를 입력해주세요</Title>
      <ButtonNext>
        <Link to="/signupemail">
          <h1>다음</h1>
        </Link>{" "}
      </ButtonNext>
    </Container>
  );
}
export default Start;
