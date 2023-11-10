import React, { useState, useEffect } from "react";
import { BackGround, BackIMG, Title } from "../Login/Style";
import { Text, LinkBox, CopyBtn, ClickBox, PresentComponent, FlexBox, PresentBox } from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const location = useLocation();
  const uniqueUrl = location.pathname;

  const [ShowPresent, setShowPresent] = useState(false);
  const [ShowClickPresent, setShowClickPresent] = useState([]);

  const userLocation = "http://localhost:5173" + uniqueUrl;

  const userLocation="http://localhost:5173"+uniqueUrl;
  console.log(uniqueUrl);
  const handleCopy = () => {
    navigator.clipboard.writeText(userLocation);
    alert("복사 되었습니다!");
  };
  const [response, setResponse] = useState(null);
  const [photoresponse, setPhotoResponse] = useState(null);

  const [userName, setUserName] = useState("");
  const apiUrl = "/api/v1/kureomi" + uniqueUrl;
  const [userName, setUserName] = useState("");
  const apiUrl = "/api/v1/kureomi" + uniqueUrl;

  const uniqueId = location.pathname.replace("/home/", "");
  console.log();
  const photoapiUrl = "/api/v1/kureomi/" + uniqueId;
  const navigate = useNavigate();

  const handlePresentClick = (giftBoxId,uniqueUrl) => {
    console.log(giftBoxId);
    navigate('/KureomiClose', { 
      state: { 
        giftBoxId:giftBoxId,
        uniqueUrl:uniqueUrl
      }
    });
  }

  //서버로부터 username받기
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
    if (response && response.userName) {
      setUserName(response.userName);
    }
  }, [response]);
  }, [response]);

  //전체 포토꾸러미 서버로부터 받기 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const photoresponse = await axios.get(photoapiUrl, { withCredentials: true });
        setPhotoResponse(photoresponse.data);
      } catch (error) {
        console.error("오류", error);
      }
    };

    fetchData();
  }, []);

  const size = photoresponse ? photoresponse.length : 0;

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
          {ShowPresent && photoresponse.map((item, index) => 
            <PresentComponent 
              key={index} 
              giftBoxId={item.giftBox_id} 
              onClick={() => handlePresentClick(item.giftBox_id,uniqueUrl)} 
            />
          )}
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
