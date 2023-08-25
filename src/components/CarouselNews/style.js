import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: var(--backgroundSecondary);
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

const Icons = styled.div``;

export { Container, Wrapper, Section, Icons };
