import React, { useState } from "react";
import { Container, Title2, SubTitle, ButtonNext, ButtonSigns } from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const [name, setName] = useState(""); // 상태 변수를 사용하여 입력된 이름을 추적

  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/Login">로그인|</Link>{" "}
          <Link to="/SignUpName">회원가입</Link>{" "}
        </ButtonSigns>
        <Title2>포토꾸러미 전송이 완료되었습니다.</Title2>
        <ButtonNext>
          <Link to="/VisitSend">나의 홈 가기</Link>{" "}
        </ButtonNext>
      </Container>
    </BackGround>
  );
}

export default Start;
