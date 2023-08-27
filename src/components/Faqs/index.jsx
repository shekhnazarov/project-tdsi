import React from "react";
import { Container, Content, Section, Wrapper } from "./style.js";
import { Collapse, theme } from "antd";
import { FaQuestionCircle } from "react-icons/fa";

const getItems = (panelStyle) => [
  {
    key: "1",
    label:
      "Samarqand davlat tibbiyot universitetida oʼqish qaysi tillarda amalga oshiriladi?",
    children: (
      <p>
        Samarqand davlat tibbiyot universitetida darslar oʼzbek, rus va ingliz
        tillarida olib boriladi.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label:
      "Samarqand davlat tibbiyot universiteti yotoqxona bilan taʼminlanishi qanday amalga oshiriladi?",
    children: (
      <p>
        Talabalikka qabul qilingandan soʼng tegishli dekanatga yotoqxona
        talabnomasi bilan murojaat etiladi.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label:
      "Xorijiy fuqarolar Samarqand davlat tibbiyot universitetida qanday shart-sharoitlarda taʼlim oladi?",
    children: (
      <p>
        Xorijiy fuqarolar uchun taʼlim toʼlov-kontrakt asosida amalga
        oshiriladi.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label:
      "Talabalar respublika fan olimpiadasi nima maqsadda va qachon o'tkaziladi?",
    children: (
      <p>
        O’zbekiston Respublikasining “Ta’lim to’g’risida”gi hamda “Kadrlar
        tayyorlash milliy dasturi to’g’risida”gi qonunlariga muvofiq O’zbekiston
        Respublikasi hududida faoliyat ko’rsatayotgan davlat oliy ta’lim
        muassasalarida tahsil olayotgan talabalar davlat ta’lim standarlariga
        muvofiq o’quv rejasida nazarda tutilgan tegishli fanlar bo’yicha o’z
        bilimi va tabiiy qobiliyatlarini namoyon etish va rivojlantirish,
        o’zlarining noyob iste’dodlarini ro’yobga chiqarish uchun keng
        imkoniyatlar yaratish maqsadida Oliy va o’rta maxsus ta’lim vazirligi
        tomonidan tasdiqlangan “Oliy ta’lim muassasalari talabalari respublika
        fan olimpiadasi to’g’risidagi Nizom”ga muvofiq har yili aprel-may
        oylarida talabalar respublika fan olimpiadasi o’tkaziladi
      </p>
    ),
    style: panelStyle,
  },
];
const Faqs = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 20,
    padding: 20,
    background: token.colorFillAlter,
    borderRadius: 15,
    border: "none",
  };
  return (
    <Container>
      <Wrapper>
        <h3 className="title">FAQs</h3>
        <Section>
          <Content>
            <Collapse
              className="content__collapse"
              bordered={false}
              expandIcon={() => <FaQuestionCircle className="content__icon" />}
              style={{
                background: token.colorBgContainer,
              }}
              items={getItems(panelStyle)}
            />
          </Content>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Faqs;
