import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: var(--backgroundFooter);
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
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Content = styled.div``;

const Title = styled.h4`
  color: #fff;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 20px;
`;

const Social = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  margin-bottom: 5px;

  &:hover {
    .social {
      background-color: var(--backgroundPrimary);
    }

    .social__icon {
      color: #fff !important;
    }

    .social__subtitle {
      margin-left: 10px;
    }
  }
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;

  .social__icon {
    width: 20px !important;
    height: 20px !important;
    color: var(--backgroundPrimary);
  }
`;
const Subtitle = styled.h5`
  display: block;
  font-size: 14px;
  color: rgb(255, 255, 255);
  transition: all 0.5s ease-in-out;
`;

const Map = styled.iframe`
  width: 540px;
  height: 300px;
  border: 0;
`;

export {
  Container,
  Wrapper,
  Section,
  Content,
  Title,
  Social,
  Icons,
  Subtitle,
  Map,
};
