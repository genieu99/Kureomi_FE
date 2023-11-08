import React, { useState } from "react";
import { Container, Title, Img } from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const [name, setName] = useState(""); // 상태 변수를 사용하여 입력된 이름을 추적

  const [rotation, setRotation] = useState(0); // 회전 각도를 추적하는 상태 변수

  const handleImageClick = () => {
    setRotation(rotation + 720);
  };

  return (
    <BackGround>
      <Container>
        <Title>00님이 보낸 포토꾸러미</Title>
        <Img
          src="public\Img\2X선물.png"
          alt="회전 이미지"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handleImageClick}
        />
      </Container>
    </BackGround>
  );
}

export default Start;
