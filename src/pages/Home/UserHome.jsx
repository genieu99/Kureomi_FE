import React,{useState} from "react";
import {BackGround,BackIMG,Title} from "../Login/Style"
import {Text,LinkBox,CopyBtn,ClickBox,PresentComponent} from "./Style";
import { Link, useLocation } from "react-router-dom";


function Home(){
  const[ShowPresent,setShowPresent]=useState(false);
  // const userLocation=useLocation();
  const userLocation="www.pokku.user1.home"
    return(
        <BackGround>
          <BackIMG imgUrl="/Img/Userhome.png" opaCity="1.0">
            <Title marginTop="70px">NNN의 홈</Title>
            <Text>받은 꾸러미 : N개</Text>
            <LinkBox>{userLocation}</LinkBox><CopyBtn>복사</CopyBtn>
            {ShowPresent && <PresentComponent />}
            <ClickBox onClick={() => setShowPresent(true)}></ClickBox>  
          </BackIMG>
        </BackGround>
    );
}

export default Home;