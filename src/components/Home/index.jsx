import React from "react";
import { Container } from "../Navbar/style";
import CarouselHeader from "../CarouselHeader";
import Havolalar from "../Havolalar";

const Home = () => {
  return (
    <Container>
      <CarouselHeader />
      <Havolalar />
    </Container>
  );
};

export default Home;
