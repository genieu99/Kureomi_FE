import React, { useState,useEffect } from "react";
import { Container, Title, Img } from "./Style";
import { Link } from "react-router-dom";
import { useNavigate,useLocation } from 'react-router-dom';
import { BackGround } from "../Login/Style";
import axios from "axios";


function Start() {

  const [rotation, setRotation] = useState(0); // 회전 각도를 추적하는 상태 변수
	const navigate = useNavigate();
  const location =useLocation();
  const boxId=location.state.giftBoxId;
  let uniqueUrl=location.state.uniqueUrl;
  uniqueUrl=uniqueUrl.replace("/home/","")

  const [response, setResponse] = useState(null);

  console.log(boxId);
  console.log(uniqueUrl);
  const apiUrl="/api/v1/kureomi/"+uniqueUrl+"/"+boxId;
  console.log(apiUrl);

  const handleImageClick = () => {
    const handleClick = () => {
      setRotation(rotation + 720);
      setTimeout(() => { 
        navigate('/KureomiOpen', {
          state: {
            response: response,
            uniqueUrl:uniqueUrl
          }
        });
      }, 1000);
    };
  
    return handleClick;
  };
  

  //개별 포토꾸러미 get해오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, { withCredentials: true });
        setResponse(response.data);
        console.log(response);
      } catch (error) {
        console.error("오류", error);
      }
    };

    fetchData();
  }, []);

  const writer = response ? response.writer : '';

  return (
    <BackGround>
      <Container>
        <Title>{writer}님이 보낸 포토꾸러미</Title>
        <Img
          src="public\Img\2X선물.png"
          alt="회전 이미지"
          style={{ transform: `rotate(${rotation}deg)` }}
          onClick={handleImageClick()}
        />
      </Container>
    </BackGround>
  );
}

export default Start;
