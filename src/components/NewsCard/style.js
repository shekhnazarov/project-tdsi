import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 380px;
  min-width: 150px;
  border-radius: 10px;

  &:hover {
    .image-card {
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      transform: scale(1.1);
    }
  }
`;
const Header = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Content = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.3px;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif;
`;
const Image = styled.img`
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  transition: all 0.5s ease;
`;

export { Container, Header, Content, Image, Title };
