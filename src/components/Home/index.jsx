import React from "react";
import { Container } from "../Navbar/style";
import CarouselHeader from "../CarouselHeader";
import Havolalar from "../Havolalar";
import CarouselNews from "../CarouselNews";
import VideoGallery from "../Videogallery";
import Elonlar from "../Elonlar";

const Home = () => {
  return (
    <Container>
      <CarouselHeader />
      <Havolalar />
      <CarouselNews />
      <VideoGallery />
      <Elonlar />
    </Container>
  );
};

export default Home;
