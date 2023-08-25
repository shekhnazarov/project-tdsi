import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--backgroundPrimary);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  padding: var(--paddingPrimary);
  margin: auto;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 15px;

  .icons-menu {
    fill: white;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
  }
`;
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SignInText = styled.div`
  font-size: 16px;
  font-weight: 200;
  color: #fff5fe;
  letter-spacing: 0.2;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled(NavLink)`
  padding: ${({ padding }) => (padding ? "10px 20px" : "30px 0")};
  border-bottom: ${({ border }) => border && "1.5px dashed #a7b9fa"};
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-variant: normal;
  color: var(--colorLink);
  letter-spacing: 0.2px;
  font-family: "Barlow", sans-serif;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    padding-left: ${({ padding }) => padding && "25px"};
    color: ${({ padding }) => padding && "#0d6efd"};
  }
`;
const AntDownOutlined = styled(DownOutlined)`
  width: 8px;
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;

  svg {
    width: 12px;
  }

  &:hover {
    .drop {
      display: flex;
    }
  }
`;

const Content = styled.div`
  display: flex;
  gap: 30px;
`;
const DropdownBox = styled.div`
  position: relative;
`;
const Dropdown = styled.div`
  position: absolute;
  border-radius: 5px;
  top: 75px;
  left: 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  z-index: 2;
  width: 200px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export {
  Container,
  Main,
  Section,
  Wrapper,
  Nav,
  SignInText,
  AntDownOutlined,
  Title,
  Link,
  DropdownBox,
  Dropdown,
  Content,
};
