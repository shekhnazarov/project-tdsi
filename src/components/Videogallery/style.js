import styled from "styled-components";

const Container = styled.div`
  width: 100%;
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
  width: 100%;
  margin-top: 40px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;

  .activeButton {
    color: var(--backgroundPrimary) !important;
    border-color: var(--backgroundPrimary) !important;
  }
`;

const Button = styled.button`
  border: 0;
  background-color: #fff;
  font-size: 16px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  border-radius: 10px !important;
  border: 2px solid #fff !important;
  border-color: #fff;
  padding: 4px 12px;

  &:hover {
    color: var(--backgroundPrimary) !important;
    border-color: var(--backgroundPrimary) !important;
  }
`;

const VideoSection = styled.div`
  width: 100%;
  animation-delay: 0.3s;
  animation-name: fadeInUp;
`;
const FotoSection = styled.div``;
const GallerySection = styled.div``;
const Video = styled.video`
  width: 100%;
  border-radius: 20px;
`;

export {
  Container,
  Wrapper,
  Section,
  Buttons,
  Button,
  VideoSection,
  FotoSection,
  GallerySection,
  Video,
};
