import React from "react";
import {
  Container,
  Title,
  ButtonGroup,
  ButtonSign,
  ButtonLogin,
} from "./style";
import { Link } from "react-router-dom"; // Link 컴포넌트 추가

function Start() {
  return (
    <Container>
      <Title>
        <img src="public\Start\메인글자.png" alt="이미지 설명" />
      </Title>
      <ButtonGroup>
        <ButtonSign>
          <Link to="/signupname">회원가입</Link>{" "}
        </ButtonSign>
        <ButtonLogin>
          <Link to="/Login">로그인</Link>{" "}
        </ButtonLogin>
      </ButtonGroup>
    </Container>
  );
}
export default Start;
