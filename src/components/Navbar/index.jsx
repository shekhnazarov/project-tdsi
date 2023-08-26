import React from "react";
import {
  FaMusic,
  FaSitemap,
  FaMobileAlt,
  FaBinoculars,
  FaExpand,
} from "react-icons/fa";
import {
  Container,
  Main,
  Section,
  Wrapper,
  SignInText,
  Nav,
  Title,
  AntDownOutlined,
  Link,
  DropdownBox,
  Dropdown,
  Content,
} from "./style";
import { Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
const Navbar = () => {
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section>
            {/* <FontAwesomeIcon icon="fa-solid fa-music" fill="white" /> */}
            <FaMusic className="icons-menu" />
            <FaSitemap className="icons-menu" />
            <FaMobileAlt className="icons-menu" />
            <FaExpand className="icons-menu" />
            <FaBinoculars className="icons-menu" />
          </Section>
          <Section>
            <SignInText>Tizimga kirish</SignInText>
          </Section>
        </Wrapper>
      </Main>
      <Nav>
        <Wrapper>
          <Content>
            {navbar?.map((item, index) => {
              return (
                <DropdownBox key={index}>
                  <Link>
                    <Title>{item?.title || "title"}</Title>
                    <AntDownOutlined />
                    <Dropdown className="drop">
                      {item?.children?.map((info, index) => {
                        return (
                          <Title
                            padding="true"
                            border="true"
                            to={info?.path}
                            key={index}
                          >
                            {info?.label || "label"}
                          </Title>
                        );
                      })}
                    </Dropdown>
                  </Link>
                </DropdownBox>
              );
            })}
          </Content>
          <Content></Content>
        </Wrapper>
      </Nav>
      <Outlet />
    </Container>
  );
};

export default Navbar;
