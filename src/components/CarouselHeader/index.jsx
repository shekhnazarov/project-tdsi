import React, { useRef } from "react";
import { Container, Image, Arrow, Wrapper } from "./style";
import { Carousel } from "antd";

const CarouselHeader = () => {
  const sliderRef = useRef();
  const onPrev = () => {
    return sliderRef.current.prev();
  };
  const onNext = () => {
    return sliderRef.current.next();
  };

  const carouselImage1 =
    "https://www.sammi.uz/upload/images/62f82ca5c295d-62f82ca5c295f-62f82ca5c2960-62f82ca5c2961.webp?ver=3";
  const carouselImage2 =
    "https://www.sammi.uz/upload/images/63abe382ee698-63abe382ee699-63abe382ee69a-63abe382ee69b.webp?ver=3";
  const carouselImage3 =
    "https://www.sammi.uz/upload/images/62e8ab1c025cf-62e8ab1c025d0-62e8ab1c025d1-62e8ab1c025d2.webp?ver=3";
  const carouselImage4 =
    "https://www.sammi.uz/upload/images/63a96fefdc712-63a96fefdc713-63a96fefdc714-63a96fefdc715.webp?ver=3";
  return (
    <Container>
      <Carousel ref={sliderRef} className="header-slider">
        <Image src={carouselImage1} />
        <Image src={carouselImage2} />
        <Image src={carouselImage3} />
        <Image src={carouselImage4} />
      </Carousel>
      {/* <Blur /> */}
      <Wrapper>
        <Arrow left="true" onClick={onPrev} name="left" />
        <Arrow onClick={onNext} name="right" />
      </Wrapper>
    </Container>
  );
};

export default CarouselHeader;
