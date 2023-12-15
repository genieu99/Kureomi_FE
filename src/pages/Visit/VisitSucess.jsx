import React, { useState, useEffect } from "react";
import { Container, Title2, SubTitle, ButtonNext, ButtonSigns, SendSuccess } from "./Style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BackGround } from "../Login/Style";

function Start() {
  const [name, setName] = useState(""); // 상태 변수를 사용하여 입력된 이름을 추적
  const navigate = useNavigate();
  const location = useLocation();
  const uniqueUrl = location.state?.uniqueUrl;
  console.log(uniqueUrl);


  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/visithome/home/${uniqueUrl}`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, uniqueUrl]);


  return (
    <BackGround>
      <Container>
        <ButtonSigns>
          <Link to="/">로그인 | 회원가입</Link>{" "}
        </ButtonSigns>
        <SendSuccess>포토꾸러미 전송이 완료되었습니다.</SendSuccess>
      </Container>
    </BackGround>
  );
}

export default Start;
