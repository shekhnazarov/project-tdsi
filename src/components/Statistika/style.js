import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: var(--backgroundPrimary);
  background-image: linear-gradient(315deg, #06bcfb 0%, #4884ee 74%);
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

  &:hover {
    .havola-card {
      position: absolute;
      top: -10px;
    }
  }
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
  opacity: 1;
  width: 100%;
  box-shadow: 5px 5px 38px 5px rgb(0 0 0 / 8%);
  visibility: visible;
  animation-delay: 0.4s;
  animation-name: fadeInRight;

  &:hover {
    top: -15px;
    .icons {
      background-color: var(--backgroundPrimary);
    }

    .icon-havola {
      fill: white;
    }
  }
`;

const Icons = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transition: all 0.4s ease;
  border: 2px dashed var(--backgroundPrimary);
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-havola {
    fill: var(--backgroundPrimary);
    width: 25px;
    height: 25px;
  }
`;

const Number = styled.h6`
  margin-top: 10px;
  font-weight: 700;
  font-size: 30px;
  line-height: 56px;
  font-family: sans-serif;
  color: #222;
`;

const Content = styled.p`
  font-size: 16px;
  color: var(--backgroundPrimary);
  font-weight: 500;
`;

export {
  Container,
  Wrapper,
  Section,
  HavolaCard,
  Icons,
  HavolaBox,
  Number,
  Content,
};
