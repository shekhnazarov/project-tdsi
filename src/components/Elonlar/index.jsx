import React from "react";
import { Container, Wrapper, Section } from "./style";
import Slider from "react-slick";
import NewsCard from "../NewsCard";

const Elonlar = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Wrapper>
        <h3 className="title">E'lonlar</h3>
        <Section>
          <Slider {...settings} className="slider-news">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </Slider>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Elonlar;
