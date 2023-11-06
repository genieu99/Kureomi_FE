import {BackGround,BackIMG,Title,Input,Button,Form} from "./Style";
import React, { useState } from "react";



function Login(){
    const [inputEmail, setInputEmail] = useState(""); 
    const [inputPass, setInputPass] = useState(""); 

    const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
    };

    const handlePassChange = (event) => {
        setInputPass(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 로그인 로직  구현
        console.log(`이메일: ${email}, 비밀번호: ${password}`);
    };

    return(
        <BackGround>
            <BackIMG>
                <Title>로그인</Title>
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
    )
}

export default Login;