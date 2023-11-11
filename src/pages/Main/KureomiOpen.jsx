import React from "react";
import {BackGround, Container, Title,OpenBoxImg,ImgBoxx,ImgBox, TextBox,Letter,CloseBtn} from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';
 
function KureomiOpen() {
  const location =useLocation();
  const response=location.state.response;
  console.log(response);
  const navigate=useNavigate();
  
  const uniqueUrl=location.state.uniqueUrl;
  console.log(uniqueUrl);
  const writer = response ? response.writer : '';
  const message= response?response.message:'';
  const photos = response ? response.photos : [];

  const moveUrl="http://localhost:5173/home/"+uniqueUrl;

  const renderCollage = () => {
    return photos.map((photo, index) => (
      <ImgBox key={index}>
        <img src={`http://localhost:8080/image?imageName=${photo.fileUrl}`} alt={`collage-${index}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </ImgBox>
    ));
  };

  const move=()=>{
    window.location.href=moveUrl;
  }

    
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
        <CloseBtn onClick={move}>닫기</CloseBtn>
      </Container>
     
    </BackGround>
  );
}

export default KureomiOpen;
