import React,{useState,useEffect} from "react";
import {BackGround,BackIMG,Title} from "../Login/Style"
import {Text,LinkBox,CopyBtn,ClickBox,PresentComponent,FlexBox} from "./Style";
import { Link, useLocation, useParams} from "react-router-dom";
import axios from "axios";


function Home(){
  const location=useLocation();
  const uniqueUrl=location.pathname; // /Home/cf093be6-17e3-49c9-8e7b-f77a30eac2d4

  const[ShowPresent,setShowPresent]=useState(false);
  const[ShowClickPresent,setShowClickPresent]=useState(true);

  const userLocation="http://localhost:5173"+uniqueUrl;
  console.log(uniqueUrl);
  const handleCopy = () => {
    navigator.clipboard.writeText(userLocation);
    alert("복사 되었습니다!")
  }
  const [response, setResponse] = useState(null);
  const [userName,setUserName]=useState("");
  const apiUrl="/api/v1/kureomi"+uniqueUrl;
  console.log(apiUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl,{ withCredentials: true });
        setResponse(response.data);
      } catch (error) {
        console.error('오류', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if(response) {
      setUserName(response.userName);
    }
  }, [response]); // response가 변경될 때마다 이 useEffect는 실행됩니다.

  return(
    <BackGround>
      <BackIMG imgUrl="/Img/Userhome.png" opaCity="1.0">
        <Title marginTop="70px">{userName}의 홈</Title>
        <Text>받은 꾸러미 : N개</Text>
        <FlexBox height="10%" flag="center">
          <LinkBox>{userLocation}</LinkBox><CopyBtn onClick={handleCopy}>복사</CopyBtn>
        </FlexBox>
        <FlexBox height="45%" margin="0 0 0 10%">
          {ShowPresent && <PresentComponent />}
        </FlexBox>
        <FlexBox height="22%" flag="center">
          {ShowClickPresent && <ClickBox onClick={() => 
            {setShowPresent(true); setShowClickPresent(false);}}>
            </ClickBox> } 
        </FlexBox>
      </BackIMG>
    </BackGround>
  );
}

export default Home;
