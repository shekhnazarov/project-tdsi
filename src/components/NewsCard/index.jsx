import React from "react";
import { Container, Content, Header, Image, Title } from "./style";
import newsImage1 from "../../assets/images/news-image1.jpg";

const NewsCard = () => {
  return (
    <Container>
      <Header>
        <Image src={newsImage1} className="image-card" />
      </Header>
      <Content>
        <Title>
          ​Germaniya universitetlari bilan hamkorlikda mutaxassis chiqarishda
          OPASCA tashkiloti ko‘maklashadi
        </Title>
      </Content>
    </Container>
  );
};

export default NewsCard;
