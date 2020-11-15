import React from "react";
import styled from "styled-components";


export default function SlideIMG({ text,img }) {
  return (
    <Container>      
      <Title>{text}</Title>
      <IMG src={img} />      
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 40vh;
`;
const IMG = styled.img`
  width: 100vw;
  height: inherit ;
  object-fit: cover;
  z-index: 1;
`;
const Title = styled.h1`
  z-index: 10;
  position: absolute;
  display: inline;
  width: 100%;  
  color: #f2f2f2;
  text-align: center;
  margin-top: 4em;
`;


