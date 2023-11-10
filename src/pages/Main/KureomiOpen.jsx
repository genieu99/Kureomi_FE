import React from "react";
import {BackGround, Container, Title,OpenBoxImg,ImgBox,TextBox,Letter} from "./Style";
import { useLocation } from 'react-router-dom';


function KureomiOpen() {
  const location =useLocation();
  const response=location.state.response;
  console.log(response);

  const writer = response ? response.writer : '';
  const message= response?response.message:'';

  return (
    <BackGround>
      <Container>
        <Title>{writer}님이 보낸 포토꾸러미</Title>
        <OpenBoxImg>
          <ImgBox></ImgBox>
          <TextBox>
            <Letter>{message}</Letter>
          </TextBox>
        </OpenBoxImg>
      </Container>
    </BackGround>
  );
}

export default KureomiOpen;
