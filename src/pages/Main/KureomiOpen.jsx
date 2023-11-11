import React from "react";
import {BackGround, Container, Title,OpenBoxImg,ImgBoxx,ImgBox, TextBox,Letter} from "./Style";
import { useLocation } from 'react-router-dom';

 
function KureomiOpen() {
  const location =useLocation();
  const response=location.state.response;
  console.log(response);

  const writer = response ? response.writer : '';
  const message= response?response.message:'';
  const photos = response ? response.photos : [];

  // 콜라주 이미지 렌더링 함수
    const renderCollage = () => {
    return photos.map((photos, index) => (
      <ImgBox key={index}>
        <img src={`http://localhost:8080/${photos.fileUrl}`} alt={`collage-${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </ImgBox>
  ));
};


    
  return (
    <BackGround>
      <Container>
        <Title>{writer}님이 보낸 포토꾸러미</Title>
        <OpenBoxImg>
        <ImgBoxx>      
         {renderCollage()}
        </ImgBoxx>

          <TextBox>
            <Letter>{message}</Letter>
          </TextBox>
        </OpenBoxImg>
      </Container>
    </BackGround>
  );
}

export default KureomiOpen;
