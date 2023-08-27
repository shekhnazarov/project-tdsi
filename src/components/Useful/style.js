import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  padding: var(--paddingPrimary);
  margin: auto;
  padding-top: 50px !important;
  padding-bottom: 50px !important;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-top: 50px;
`;

const HavolaBox = styled.div`
  position: relative;
  width: 100%;
  min-width: 200px;
  max-width: 270px;
  margin-bottom: 10px;
`;

const HavolaCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 5px 5px 38px 5px rgb(0 0 0 / 8%);
`;

const Content = styled.p`
  font-size: 16px;
  color: black;
  font-weight: 500;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;

export {
  Container,
  Wrapper,
  Section,
  HavolaCard,
  HavolaBox,
  Content,
  Image,
  LinkTo,
};
