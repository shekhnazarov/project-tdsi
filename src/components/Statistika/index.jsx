import React from "react";
import {
  HavolaCard,
  Icons,
  Section,
  Wrapper,
  Container,
  HavolaBox,
  Number,
  Content,
} from "./style";
import { FaUserTie, FaUsers, FaUserGraduate } from "react-icons/fa";
import "../AnimationDivider/style.css";

const Statistika = () => {
  return (
    <Container>
      <Wrapper>
        <h3 className="title color-white">Asosiy ko'rsatkichlar</h3>
        <Section>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaUserTie className="icon-havola" />
              </Icons>
              <Number>624</Number>
              <Content>Professor-o'qituvchilar</Content>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaUsers className="icon-havola" />
              </Icons>
              <Number>624</Number>
              <Content>Professor-o'qituvchilar</Content>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaUsers className="icon-havola" />
              </Icons>
              <Number>624</Number>
              <Content>Professor-o'qituvchilar</Content>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaUserGraduate className="icon-havola" />
              </Icons>
              <Number>624</Number>
              <Content>Professor-o'qituvchilar</Content>
            </HavolaCard>
          </HavolaBox>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Statistika;
