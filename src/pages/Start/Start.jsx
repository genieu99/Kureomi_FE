import React from "react";
import {BackGround} from "../Login/Style"
import {
  BackImg,
  // Title,
  ButtonGroup,
  ButtonSign,
  ButtonLogin,
  LogoImg,StyledLink
} from "./Style";


function Start() {
  return (
    <BackGround>
      <BackImg>
        <LogoImg src="public\Start\메인글자.png" alt="화면로고" />
        <ButtonGroup>
          <ButtonSign>
            <StyledLink to="/signupname">회원가입</StyledLink>{" "}
          </ButtonSign>
          <ButtonLogin>
            <StyledLink to="/Login">로그인</StyledLink>{" "}
          </ButtonLogin>
        </ButtonGroup>
      </BackImg>
    </BackGround>
  );
}
export default Start;
