import React, { useState, useEffect,} from "react";
import { Container, Title, ButtonNext } from "./Style";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  
  const location=useLocation();
  const userUrl=location.state.url;
  const navigate=useNavigate();
  
  const handleClick = () => {
    navigate(`/Home/${userUrl}`);
  };

    return (
      <BackGround>
        <Container>
          <Title>가입이 완료되었습니다!</Title>
          <ButtonNext onClick={handleClick}>나의 홈 가기</ButtonNext>
        </Container>
      </BackGround>
    );
  }
  
export default Start;

