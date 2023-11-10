import { useNavigate } from "react-router-dom";
import { BackGround, BackIMG, Title, Input, Button, Form } from "./Style";
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");
  const navigate = useNavigate(); // useNavigate를 이곳에서 사용

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setInputPass(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "/api/v1/kureomi/login",
        {
          email: inputEmail,
          password: inputPass,
        },
        { withCredentials: true }
      );

      console.log("로그인 성공");
      console.log(response.data);
      const uniqueUrl=response.data.uniqueUrl;
      console.log(uniqueUrl);

      navigate(`/home/${uniqueUrl}`);
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  return (
    <BackGround>
      <BackIMG imgUrl="/SignUp/로그인배경.png" opaCity="0.5">
        <Title marginTop="150px">로그인</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="이메일 주소를 입력해주세요"
            value={inputEmail}
            onChange={handleEmailChange}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={inputPass}
            onChange={handlePassChange}
          />
          <Button type="submit">로그인</Button>
        </Form>
      </BackIMG>
    </BackGround>
  );
}

export default Login;
