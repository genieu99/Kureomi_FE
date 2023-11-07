import styled from "styled-components";

export const Text =styled.p`
font-size:20px;
z-index:3;
margin-top:0px;
`
export const LinkBox=styled.div`
z-index:3;
position:relative;
right:30px;
width:50%;
height:2%;
background-color:rgba(255,255,255,0.5);
border:1px solid black;
border-radius: 10px 0 0 10px;
display:flex;
align-items:center;
padding:10px;
font-size:20px;
color:rgba(0,0,0,0.5);
`

export const CopyBtn=styled.button`
z-index:3;
position:relative;
top:-40px;
left:125px;
background-color:rgb(28,89,73);
width:20%;
height:4.4%;
padding:10px;
color:white;
font-size:20px;
border:none;
border:1px solid black;
text-align:center;
border-radius: 0 10px 10px 0;
`
export const ClickBox=styled.div`
z-index:3;
margin-left:auto;
margin-right:auto;
background-color:blue;
width:120px;
height:120px;
position:relative;
margin-top:300px;
`

export const PresentComponent=styled.div`
z-index:3;
width:100px;
height:100px;
margin-left:10px;
background-image:url("/Img/present.png");
background-size:100% 100%;
` 
