import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "./../img/1.jpg";
import img2 from "./../img/2.jpg";
import img3 from "./../img/3.jpg";

const Container = styled.div`
  width: 100%;  
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
height: 15px;
width: 15px;
background-color: #bbb;
border-radius: 50%;
display: inline;
transition: background-color 0.6s ease;
position: absolute;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const TOTAL_SLIDES = 2;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const Sliding = () => {
    setTimeout(nextSlide,5000)
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    Sliding()
}, [currentSlide]);
  return (    
    <Container>              
      <SliderContainer ref={slideRef}>
        <Slide img={img1} text={"이 음식은 맛있어요!"}/>
        <Slide img={img2} text={"리뷰를 공유해보세요!"} />
        <Slide img={img3} text={"제품 체험단 모집중!"}/>
      </SliderContainer>
    </Container>
  );
}
