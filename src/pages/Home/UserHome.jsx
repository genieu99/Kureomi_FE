import React,{useState} from "react";
import {BackGround,BackIMG,Title} from "../Login/Style"
import {Text,LinkBox,CopyBtn,ClickBox,PresentComponent,FlexBox} from "./Style";
import { Link, useLocation } from "react-router-dom";


function Home(){


  const[ShowPresent,setShowPresent]=useState(false);
  const[ShowClickPresent,setShowClickPresent]=useState(true);

  // const userLocation=useLocation();
  const userLocation="www.pokku.user1.home"
  
  const handleCopy = () => {
    navigator.clipboard.writeText(userLocation);
    alert("복사 되었습니다!")
  }
    return(
        <BackGround>
          <BackIMG imgUrl="/Img/Userhome.png" opaCity="1.0">
            <Title marginTop="70px">NNN의 홈</Title>
            <Text>받은 꾸러미 : N개</Text>
            <FlexBox height="10%" flag="center">
              <LinkBox>{userLocation}</LinkBox><CopyBtn onClick={handleCopy}>복사</CopyBtn>
            </FlexBox>
            <FlexBox height="45%" margin="0 0 0 10%">
              {ShowPresent && <PresentComponent />}
            </FlexBox>
            <FlexBox height="22%" flag="center">
              {ShowClickPresent &&<ClickBox onClick={() => 
                {setShowPresent(true); setShowClickPresent(false);}}>
                </ClickBox> } 
            </FlexBox>
          </BackIMG>
        </BackGround>
    );
}

export default Home;