import React from "react";
import { Container } from "../Navbar/style";
import CarouselHeader from "../CarouselHeader";
import Havolalar from "../Havolalar";
import CarouselNews from "../CarouselNews";
import VideoGallery from "../Videogallery";
import Elonlar from "../Elonlar";
import Statistika from "../Statistika";
import Useful from "../Useful";
import Faqs from "../Faqs";

const Home = () => {
  return (
    <Container>
      <CarouselHeader />
      <Havolalar />
      <CarouselNews />
      <VideoGallery />
      <Elonlar />
      <Statistika />
      <Faqs />
      <Useful />
    </Container>
  );
};

export default Home;
