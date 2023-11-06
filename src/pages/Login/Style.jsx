import styled from "styled-components";

export const BackGround=styled.div`
    height:100vh;
    width:100vw;
    max-width:430px;
    max-height:932px;
`

export const BackIMG=styled.div`
    height:100%;
    width:100%;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items:center;
    ::after {
        content: "";
        background-image: url("/SignUp/로그인배경.png");
        background-size:cover;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;  
    }
`


export const Title=styled.h1`
margin-left:auto;
margin-right:auto;
margin-top: 150px;
`
export const Input = styled.input`
    width:80%;
  border: none; 
  border-bottom: 2px solid #9e8f70;
  font-size: 16px; 
  background: transparent; 
  outline: none; 
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
  padding-bottom:5px;
  color:rgba(0,0,0,0.3);
  `;

export const Button = styled.button`
  margin-left:auto;
  margin-right:auto;
  background-color : #BF3A3B;
  width:60%;
  height:10%;
  border:none;
  border-radius: 11px;
  color:white;
  margin-top:40px;
    font-size:16px;
  `;

  export const Form = styled.form`
 display:flex;
 flex-direction:column;
 width:100%;
 height:100%;
  `;