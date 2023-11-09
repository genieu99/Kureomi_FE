import React from "react";
import {BackGround, Container, Title,OpenBoxImg,ImgBox,TextBox,Letter} from "./Style";


function KureomiOpen() {
 
  return (
    <BackGround>
      <Container>
        <Title>00님이 보낸 포토꾸러미</Title>
        <OpenBoxImg>
          <ImgBox></ImgBox>
          <TextBox>
            <Letter>우리 처음 멋사 OT에서 만났을때가 엊그제같은데 벌써 11월이라니 ㅠㅠ! 시간 참 빨리 간다,, 내 사진꾸러미는 우리 중앙해커톤 갔을때 너의 열심히 하는 모습들을 찍어놨는데 까먹고 못 보낸 것들을 모아봤어 ㅎㅎ 올 한 해, 이것저것하느라 고생 많았고 내년 한해도 너가 원하는 것들을 다 이루는 한 해가 되기를 바랄게!</Letter>
          </TextBox>
        </OpenBoxImg>
      </Container>
    </BackGround>
  );
}

export default KureomiOpen;
