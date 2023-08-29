import React, { useEffect } from "react";
import { Container, Wrapper } from "./style";

const Pages = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Scroll hodisasini qayta ishlang
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Event listenerdan o'chib ketishdan oldin
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <Wrapper>Pages</Wrapper>
    </Container>
  );
};

export default Pages;
