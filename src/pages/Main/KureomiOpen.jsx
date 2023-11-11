import React, { useState, useEffect } from "react";
import { BackGround, Container, Title, OpenBoxImg, ImgBoxx, ImgBox, TextBox, Letter, CloseBtn } from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';


const modalStyle = {
  position: 'fixed',
  zIndex: 1000, 
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.5)',
};

const modalContentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: 'auto',
  padding: '20px',
  width: '80%',
  maxWidth: '700px',
};


const closeStyle = {
  color: '#fff',
  float: 'right',
  fontSize: '28px',
  fontWeight: 'bold',
  cursor: 'pointer',
};


function KureomiOpen() {
  const location = useLocation();
  const response = location.state.response;
  console.log(response);
  const navigate=useNavigate();

  
  const writer = response ? response.writer : '';
  const message = response ? response.message : '';
  const photos = response ? response.photos : [];

  const uniqueUrl=location.state.uniqueUrl;
  const moveUrl="http://localhost:5173/home/"+uniqueUrl;

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalClose = (event) => {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
      closeModal();
    }
  };

  useEffect(() => {
    // 컴포넌트 마운트 시에 이벤트 리스너 추가
    window.addEventListener('click', handleModalClose);

    // 언마운트 시에 이벤트 리스너 제거
    return () => {
      window.removeEventListener('click', handleModalClose);
    };
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행

  const renderCollage = () => {
    return photos.map((photo, index) => (
      <ImgBox key={index} onClick={() => openModal(`http://localhost:8080/image?imageName=${photo.fileUrl}`)}>
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

      {/* 모달 */}
      {selectedImage && (
            <div className="modal" style={modalStyle}>
              <div className="modal-content" style={modalContentStyle}>
                <span className="close" onClick={closeModal} style={closeStyle}>&times;</span>
                <img src={selectedImage} alt="Selected Image" style={{ width: '100%', height: 'auto' }} />
              </div>
            </div>
          )}
    </BackGround>
  );
}

export default KureomiOpen;
