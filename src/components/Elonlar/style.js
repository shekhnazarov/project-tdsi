import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: var(--backgroundNews);
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
  width: 100%;
  margin-top: 40px;
`;

export { Container, Wrapper, Section };
