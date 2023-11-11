import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Container, Title, ButtonSigns, Input, ButtonSend } from "./Style";
import { Link } from "react-router-dom";
import { BackGround } from "../Login/Style";
import axios from "axios";

function Start() {
  const location = useLocation();
  const navigate=useNavigate();
  const uniqueUrl = location.state?.uniqueUrl; //ㄹㅇ숫자만
  const userName = location.state?.userName;

  console.log(uniqueUrl);

  const apiUrl="/api/v1/kureomi/"+uniqueUrl+"/create";

  const move=()=>{
    navigate('/VisitSucess');
  }

  const [name, setName] = useState("");
  const [letter, setLetter] = useState("");
  const [photoIdList, setPhotoIdList] = useState([]);

  useEffect(() => {
    if (location.state && location.state.photoIdList) {
      setPhotoIdList(location.state.photoIdList);
    }
  }, [location.state]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLetterChange = (event) => {
    setLetter(event.target.value);
  };

  const handleButtonClick = (event) => {
    handleSubmit(event);
    move();
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("작성자:", name);
    console.log("편지 내용:", letter);
    console.log("사진 ID 목록:", photoIdList);


    // 데이터 가져오기
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`/api/v1/kureomi/data`, {
    //       params: { photoIdList: photoIdList },
    //       withCredentials: true,
    //     });

    //     console.log(response.status);

    //     서버 응답이 200이면 데이터 가져오기 성공
    //     console.log(
    //       response.status === 200
    //         ? "데이터 가져오기 성공"
    //         : "데이터 가져오기 실패"
    //     );

    //     서버에서 반환한 데이터
    //     console.log(response.data);

    //     반환된 photoIdList를 userData의 photoIdList에 추가
    //     setPhotoIdList(response.data.map((photo) => photo.photoId));
    //   } catch (error) {
    //     에러 발생 시 로그 출력
    //     console.log("오류 발생:", error);
    //   }
    // };

    // fetchData 함수를 실행하여 데이터를 가져옴
    // fetchData();

    // const userData = new FormData();
    // userData.append("writer", name);
    // userData.append("message", letter);

    // // photoIdList를 formData에 추가
    // for (let i = 0; i < photoIdList.length; i++) {
    //   userData.append("photos", photoIdList[i]);
    // }
    // console.log(userData);
    
    try {
      const response = await axios.post(
        apiUrl,
        {
          writer:name,
          message:letter,
          photoIdList:photoIdList
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      console.log(response); // 요청 성공 시 응답을 출력

      // if (response.status === 201) {
      //   console.log("전송 완료");
      // } else {
      //   console.log("전송 실패");
      // }
    } catch (error) {
      console.log("오류 발생 : ", error);
    }
  };

  const textareaStyle = {
    width: "100%",
    maxWidth: "80%",
    height: "200px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    resize: "vertical",
    background: "rgba(255, 255, 255, 0.50)",
    outline: "none",
    margin: "30px",
    fontfamily: "SUITE",
  };

  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/Login">로그인|</Link>{" "}
          <Link to="/SignUpName">회원가입</Link>{" "}
        </ButtonSigns>
        <Title>{userName}님의 홈</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="이름을 알려주세요! (닉네임도 좋아요)"
            value={name}
            onChange={handleNameChange}
          />
          <textarea
            style={textareaStyle}
            placeholder="편지를 입력해주세요"
            value={letter}
            onChange={handleLetterChange}
          />
          <ButtonSend type="submit" onClick={handleButtonClick}>보내기</ButtonSend>
        </form>
      </Container>
    </BackGround>
  );
}

export default Start;
