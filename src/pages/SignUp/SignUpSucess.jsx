import React, { useState } from "react";
import { Container, Title, ButtonNext } from "./Style";
import { Link } from "react-router-dom";
import {BackGround} from"../Login/Style"

function Start() {
  const [name, setName] = useState(""); // 상태 변수를 사용하여 입력된 이름을 추적

  const handleNameChange = (event) => {
    setName(event.target.value); // 입력된 이름을 상태 변수에 업데이트
  };

  return (
    <BackGround>
      <Container>
        <Title>가입이 완료되었습니다!</Title>
        <ButtonNext>
          <Link to="/SignUpSucess">
            <h1>나의 홈 가기</h1>
          </Link>{" "}
        </ButtonNext>
      </Container>
    </BackGround>
  );
}

export default Start;
