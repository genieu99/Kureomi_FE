import React, { useState, useEffect } from "react";
import { Container, Title, SubTitle, ButtonNext, ButtonSigns } from "./Style";
import { Link, Navigate, useLocation,useNavigate } from "react-router-dom";
import { BackGround } from "../Login/Style";
import axios from "axios";

function VisitHome() {
  const [userName, setUserName] = useState("");
  const [photoresponse, setPhotoResponse] = useState(null);
  const [response, setResponse] = useState(null);
  
  const location = useLocation();
  const uniqueUrl=location.pathname.replace("/visithome/home/","");
  console.log(uniqueUrl);

  const apiUrl = "/api/v1/kureomi/home/"+uniqueUrl;
  const photoapiUrl= "/api/v1/kureomi/"+uniqueUrl;

  const navigate=useNavigate();

  const move=()=>{
    navigate('/VisitSend',{
      state:{
        uniqueUrl:uniqueUrl
      }
    });
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, { withCredentials: true });
        setResponse(response.data);
      } catch (error) {
        console.error("오류", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Response:", response);
    if (response && response.userName) {
      console.log("Username:", response.userName);
      setUserName(response.userName);
    }
  }, [response]);

  
  //포토꾸러미 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const photoresponse = await axios.get(photoapiUrl, {
          withCredentials: true,
        });
        setPhotoResponse(photoresponse.data);
      } catch (error) {
        console.error("오류", error);
      }
    };

    fetchData();
  }, []);
  console.log(photoresponse);
  const size = photoresponse?.length;

  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/Login">로그인|</Link>{" "}
          <Link to="/SignUpName">회원가입</Link>{" "}
        </ButtonSigns>
        <Title>{userName}의 홈</Title>
        <SubTitle>받은 꾸러미 : {size}개</SubTitle>
        <ButtonNext onClick={move}>
          포토꾸러미 전송하기
        </ButtonNext>
      </Container>
    </BackGround>
  );
}

export default VisitHome;
