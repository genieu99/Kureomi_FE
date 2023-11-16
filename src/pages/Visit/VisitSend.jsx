import React, { useState, useRef } from "react";
import {
  ContainerPhoto,
  Title,
  SubTitle,
  ButtonSelect,
  ButtonSigns,
  SubScribe,
} from "./Style";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { BackGround } from "../Login/Style";
import axios from "axios";

function VisitSend() {
  const navigate = useNavigate();
  const location = useLocation();
  const uniqueUrl = location.state?.uniqueUrl;
  const userName = location.state?.userName;

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
    // Check if exactly 6 files are selected
    if (selectedFiles.length == 7) {
      alert("사진을 6장 선택해주세요!");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("photos", selectedFiles[i]);
    }

    try {
      const response = await axios.post("/api/v1/kureomi/photo/before-test", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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
        const defaultFile = fileUrlList.find(
          (fileUrl) => fileUrl === "default.png"
        );

        //defaultfile이 있으면 알림창 띄우기
        if (defaultFile) {
          alert("유해 사진이 감지되어 기본 이미지로 대체됩니다.");
        }
        //여기까지

        navigate("/visitwrite", {
          state: {
            photoIdList: photoIdList,
            uniqueUrl: uniqueUrl,
            userName:userName
          },
        });
      } else {
        console.log("사진 전송 실패 ");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  const buttonStyle = {
    position: "absolute",
    top: "69.8%",
    left: "69%",
    padding: "10px 20px",
    backgroundColor: "#bf3a3b", // 원하는 배경색
    color: "white",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
    fontSize: "15px",
    width: "25%",
    height: "3.8%",
    fontFamily: "SUITE",
    fontWeight: "600",
  };

  const errorTextStyle = {
    color: "#bf3a3b",
    fontFamily: "SUITE",
    fontWeight: "bold",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.40)",
    width: "50%",
    border: "2.5px dashed",
    borderColor: "#bf3a3b",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "10px",
  };

  const fileList = {
    alignItems: "center",
    width: "70%",
    border: "2px solid",
    borderColor: "#1C5949",
    borderRadius: "10px",
    fontSize: "16px",
    background: "rgba(255, 255, 255, 0.50)",
  };

  return (
    <BackGround>
      <ContainerPhoto>
        <ButtonSigns>
          <Link to="/">로그인 | 회원가입</Link>{" "}
        </ButtonSigns>
        <Title>{userName}의 홈</Title>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
          ref={fileInputRef}
        />
        <ButtonSelect onClick={openFileInput}>사진 선택하기</ButtonSelect>
        <SubScribe>함께 추억하고 싶은 사진을 6장 선택해주세요.</SubScribe>
        {Array.isArray(selectedFiles) && selectedFiles.length === 6 && (
          <div style={fileList}>
            <h3 style={{textAlign: "center"}}>[선택한 파일 목록]</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
            <button style={buttonStyle} onClick={sendFilesToBackend}>
              다음
            </button>
          </div>
        )}
        {Array.isArray(selectedFiles) && selectedFiles.length !== 6 && selectedFiles.length !== 0 && (
          <div style={errorTextStyle}>
            <h3>선택한 파일이 6장이 아닙니다.<br/>다시 선택해주세요.</h3>
          </div>
        )}
      </ContainerPhoto>
    </BackGround>
  );
}

export default VisitSend;