import React, { useState } from "react";
import { Container, Title, ButtonNext, Input } from "./Style";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const [email, setEmail] = useState(""); // 이메일 상태 변수를 사용하여 입력된 이메일을 추적

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // 입력된 이메일을 상태 변수에 업데이트
  };

  const location=useLocation();
  const userName=location.state.userName;
  
  
  const navigate=useNavigate();
  const move=()=>{
    navigate('/SignUpPW',{
      state:{
        userName:userName,
        email:email
      }
    });
  }

  return (
    <BackGround>
      <Container>
        <Title>이메일 주소를 알려주세요</Title>

        {/* 이메일 입력 창을 추가 */}
        <Input
          type="email"
          placeholder="이메일 주소를 입력해주세요"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <ButtonNext onClick={move}>다음
          {/* <Link to="/signuppw">다음</Link>{" "} */}
        </ButtonNext>
      </Container>
    </BackGround>
  );
}

export default Start;
