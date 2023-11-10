import React, { useState, useEffect } from "react";
import { BackGround, BackIMG, Title } from "../Login/Style";
import {
  Text,
  LinkBox,
  CopyBtn,
  ClickBox,
  PresentComponent,
  FlexBox,
  PresentBox,
} from "./Style";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const location = useLocation();
  const uniqueUrl = location.pathname; // /Home/cf093be6-17e3-49c9-8e7b-f77a30eac2d4

  const [ShowPresent, setShowPresent] = useState(false);
  const [ShowClickPresent, setShowClickPresent] = useState([]);

  const userLocation = "http://localhost:5173" + uniqueUrl;
  console.log(uniqueUrl);
  const handleCopy = () => {
    navigator.clipboard.writeText(userLocation);
    alert("복사 되었습니다!");
  };
  const [response, setResponse] = useState(null);
  const [photoresponse, setPhotoResponse] = useState(null);

  const [userName, setUserName] = useState("");
  const apiUrl = "/api/v1/kureomi" + uniqueUrl;

  const uniqueId = location.pathname.replace("/home/", ""); //뒤에 uniqueid만 나오도록

  const photoapiUrl = "/api/v1/kureomi/" + uniqueId;

  //유저 이름 가져오기
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

  const size = photoresponse?.length;

  return (
    <BackGround>
      <BackIMG imgUrl="/Img/Userhome.png" opaCity="1.0">
        <Title marginTop="70px">{userName}의 홈</Title>
        <Text>받은 꾸러미 : {size}개</Text>
        <FlexBox height="10%" flag="center">
          <LinkBox>{userLocation}</LinkBox>
          <CopyBtn onClick={handleCopy}>복사</CopyBtn>
        </FlexBox>
        <PresentBox>
          {ShowPresent &&
            Array.from({ length: size }, (_, index) => (
              <PresentComponent key={index} />
            ))}
        </PresentBox>
        <FlexBox height="22%" flag="center">
          {ShowClickPresent && (
            <ClickBox
              onClick={() => {
                setShowPresent(true);
                setShowClickPresent(false);
              }}
            ></ClickBox>
          )}
        </FlexBox>
      </BackIMG>
    </BackGround>
  );
}

export default Home;
