import React from "react";
import {
  Container,
  Content,
  Icons,
  Section,
  Social,
  Subtitle,
  Title,
  Wrapper,
  Map,
} from "./style";
import {
  FaTelegram,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaFax,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Content>
            <Title>Ijtimoiy Tarmoqlar</Title>
            <Social>
              <Icons className="social">
                <FaTelegram className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">Telegram</Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaFacebookF className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">Facebook</Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaYoutube className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">Youtube</Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaInstagram className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">Instagram</Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaTwitter className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">X (Twitter)</Subtitle>
            </Social>
          </Content>
          <Content>
            <Title>Bizning manzil</Title>
            <Social>
              <Icons className="social">
                <FaMapMarkerAlt className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">
                Samarqand sh., Amir Temur k.,18-uy
              </Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaPhone className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">
                +998(66) 233 08 41
              </Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaFax className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle">
                +998 (66) 233 71 75
              </Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaEnvelope className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle"> sammu@sammu.uz</Subtitle>
            </Social>
            <Social>
              <Icons className="social">
                <FaEnvelope className="social__icon" />
              </Icons>
              <Subtitle className="social__subtitle"> samgmi@mail.ru</Subtitle>
            </Social>
          </Content>
          <Content>
            <Map
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4300.044239036471!2d69.29542445091273!3d41.30890405534615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef527cfd7beab%3A0x41490626bc752d26!2sToshkent%20davlat%20stomatologiya%20instituti%20eski!5e0!3m2!1sen!2s!4v1693083841745!5m2!1sen!2s"
              loading="lazy"
            ></Map>
          </Content>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Footer;
