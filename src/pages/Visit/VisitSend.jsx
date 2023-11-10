import React, { useState, useRef } from "react";
import { Container, Title, SubTitle, ButtonSelect, ButtonSigns } from "./Style";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { BackGround } from "../Login/Style";
import axios from "axios";

function VisitSend() {
  const navigate = useNavigate();
  const location=useLocation();
  const uniqueUrl = location.state?.uniqueUrl;
  console.log(uniqueUrl);


  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sendPhotoComplete, setSendPhotoComplete] = useState(false); // 이 부분을 추가합니다.
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(Array.from(files) || []); // Convert FileList to Array
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const sendFilesToBackend = async () => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("photos", selectedFiles[i]);
    }

    try {
      const response = await axios.post("/api/v1/kureomi/photo", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.status);

      //defaultfile 처리 코드 추가
      if (response.status === 200 || response.status === 201) {
        console.log("사진 전송 완료");
        console.log("formData:", formData);
        setSendPhotoComplete(true);
        console.log(response.data);

        // photoId를 추출하여 Start 컴포넌트로 전달
        const photoInfoList = response.data.photoInfoList;
        const photoIdList = photoInfoList.map((photo) => photo.photo_id);

        //파일명도 추출해서 'default.png'가 있는지 찾기
        const fileUrlList = photoInfoList.map((photo) => photo.fileUrl); 
        const defaultFile = fileUrlList.find((fileUrl) => fileUrl === 'default.png');

        //defaultfile이 있으면 알림창 띄우기
        if (defaultFile) {
          alert('유해 사진이 감지되어 기본 이미지로 대체됩니다.');
        }
        //여기까지

        navigate("/visitwrite", { state: { 
          photoIdList :photoIdList,
          uniqueUrl:uniqueUrl
        } 

      });
      } else {
        console.log("사진 전송 실패 ");
      }


    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4CAF50", // 원하는 배경색
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };
  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/Login">로그인|</Link>{" "}
          <Link to="/SignUpName">회원가입</Link>{" "}
        </ButtonSigns>
        <Title>a먀먀ㅑㅁ 홈</Title>
        <SubTitle>함께 추억하고 싶은 사진을 6장 선택해주세요.</SubTitle>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <ButtonSelect onClick={openFileInput}>사진 선택하기</ButtonSelect>
        {Array.isArray(selectedFiles) && selectedFiles.length > 0 && (
          <div>
            <h2>선택한 파일 목록:</h2>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        <button style={buttonStyle} onClick={sendFilesToBackend}>
          전송
        </button>
      </Container>
    </BackGround>
  );
}

export default VisitSend;
