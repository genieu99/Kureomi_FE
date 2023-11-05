// Start.js

import React from "react";
import { Container, Title, SubTitle, ButtonNext } from "./Style";
import { Link } from "react-router-dom"; // Link 컴포넌트 추가

function Start() {
  return (
    <Container>
      <Title>이름을 알려주세요</Title>
      <SubTitle>추후에 포토꾸러미 홈의 이름이 될 거에요</SubTitle>

      <ButtonNext>
        <Link to="/signupemail">
          <h1>다음</h1>
        </Link>{" "}
      </ButtonNext>
    </Container>
  );
}
export default Start;
