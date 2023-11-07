import styled from "styled-components";

export const BackGround=styled.div`
    height:100vh;
    width:100vw;
    max-width:768px;
    max-height:1024px;
`

export const BackIMG=styled.div`
height:100%;
width:100%;
    position: relative;
    display: flex;
    flex-direction:column;
    align-items:center;

    &::after{
    content: "";
    background-image: url(${props => props.imgUrl});      
    background-size:100% 100%;
    height:100%;
    width:100%;
    opacity:${props=>props.opaCity};
    position:absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    z-index: 1;
    }
`



export const Title=styled.p`
margin-left:auto;
margin-right:auto;
margin-top: ${props => props.marginTop};
z-index:4;
font-weight:600;
font-size:35px;
`
export const Input = styled.input`
  width:80%;
  border: none; 
  border-bottom: 2px solid #9e8f70;
  font-size: 20px; 
  background: transparent; 
  outline: none; 
  margin-left:auto;
  margin-right:auto;
  margin-top:30px;
  padding-bottom:5px;
  color:rgba(0,0,0,0.3);
  font-family: 'SUITE';
  z-index:4;
  `;

export const Button = styled.button`
  margin-left:auto;
  margin-right:auto;
  background-color : #BF3A3B;
  width:60%;
  height:9%;
  border:none;
  border-radius: 11px;
  color:white;
  margin-top:40px;
  font-size:20px;
  font-family: 'SUITE';
  font-weight:600;
  z-index:4;
  cursor: pointer;
  `;

  export const Form = styled.form`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
  z-index:4;
`;
