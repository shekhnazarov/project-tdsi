import React from "react";
import {
  HavolaCard,
  Section,
  Wrapper,
  Container,
  HavolaBox,
  Content,
  Image,
  LinkTo,
} from "./style";
import gerb from "../../assets/images/gerb.jpg";
import "../AnimationDivider/style.css";

const Useful = () => {
  return (
    <Container>
      <Wrapper>
        <h3 className="title">Foydali saytlar</h3>
        <Section>
          <LinkTo to={"https://president.uz/oz"}>
            <HavolaBox>
              <HavolaCard className="havola-card">
                <Image src={gerb} />
                <Content>Professor-o'qituvchilar</Content>
              </HavolaCard>
            </HavolaBox>
          </LinkTo>
          <LinkTo to={"https://president.uz/oz"}>
            <HavolaBox>
              <HavolaCard className="havola-card">
                <Image src={gerb} />
                <Content>Professor-o'qituvchilar</Content>
              </HavolaCard>
            </HavolaBox>
          </LinkTo>
          <LinkTo to={"https://president.uz/oz"}>
            <HavolaBox>
              <HavolaCard className="havola-card">
                <Image src={gerb} />
                <Content>Professor-o'qituvchilar</Content>
              </HavolaCard>
            </HavolaBox>
          </LinkTo>
          <LinkTo to={"https://president.uz/oz"}>
            <HavolaBox>
              <HavolaCard className="havola-card">
                <Image src={gerb} />
                <Content>Professor-o'qituvchilar</Content>
              </HavolaCard>
            </HavolaBox>
          </LinkTo>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Useful;
