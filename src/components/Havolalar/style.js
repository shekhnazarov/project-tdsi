import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
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
      padding: 10px;
      border-radius: 50%;
      background-color: var(--backgroundPrimary);
    }

    .icon-havola {
      fill: white;
      width: 40px;
      height: 40px;
    }
  }
`;

const Icons = styled.div`
  .icon-havola {
    fill: var(--backgroundPrimary);
    width: 60px;
    height: 60px;
  }
`;

const Nav = styled.div``;

export { Container, Wrapper, Section, HavolaCard, Icons, HavolaBox, Nav };
