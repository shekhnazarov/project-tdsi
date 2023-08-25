import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: fit-content;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 45%;
  transform: translateX(50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 17px;
  background-color: rgba(0, 0, 0, 0.4);
  transform: ${({ left }) => (left ? "rotate(90deg)" : "rotate(-90deg)")};
  right: ${({ left }) => !left && "40px"};
  left: ${({ left }) => left && "40px"};

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Blur = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { Container, Image, Arrow, Blur, Wrapper };
