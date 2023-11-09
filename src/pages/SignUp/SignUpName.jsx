import React, { useState } from "react";
import { Container, Title, SubTitle, ButtonNext, Input } from "./Style";
import { Link,useNavigate} from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const navigate=useNavigate();

  const [userName, setUserName] = useState(""); // 상태 변수를 사용하여 입력된 이름을 추적

  const handleNameChange = (event) => {
    setUserName(event.target.value); // 입력된 이름을 상태 변수에 업데이트
  };
  console.log(userName);
  const move=()=>{
    navigate('/signupemail',{
      state:{
        userName:userName
      }
    });
  }

  return (
    <BackGround>
      <Container>
        <Title>이름을 알려주세요</Title>
        <SubTitle>추후에 포토꾸러미 홈의 이름이 될 거에요</SubTitle>
        <Input
          type="text"
          placeholder="이름을 입력하세요"
          name="userName"
          value={userName}
          onChange={handleNameChange}
        />
        <ButtonNext onClick={move}>다음
          {/* <Link to="/signupemail">다음</Link>{" "} */}
        </ButtonNext>
      </Container>
    </BackGround>
  );
}

export default Start;
