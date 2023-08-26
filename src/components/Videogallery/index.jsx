import React, { useState } from "react";
import {
  Button,
  Buttons,
  Container,
  Section,
  VideoSection,
  Wrapper,
  Video,
  FotoSection,
} from "./style";

const VideoGallery = () => {
  const [content, setContent] = useState("video");
  const [activeButton, setActiveButton] = useState(1);

  // const handleButtonClick = (contentType) => {
  //   if (contentType === "video") {
  //     setContent({
  //       type: "video",
  //       source: "video.mp4", // video fayl manzili
  //     });
  //   } else if (contentType === "image") {
  //     setContent({
  //       type: "image",
  //       source: "image.jpg", // rasm fayl manzili
  //     });
  //   }
  // };

  const renderContent = () => {
    if (content) {
      if (content === "video") {
        return (
          <VideoSection>
            <Video
              controls
              src="https://tsdi.uz/assets/media/welcome/main.webm"
            />
          </VideoSection>
        );
      } else if (content === "fotogallery") {
        return <FotoSection>Foto</FotoSection>;
      }
    } else {
      return <p>Please select an option</p>;
    }
  };

  return (
    <Container>
      <Wrapper>
        <h3 className="title">Toshkent Davlat Stomotologiya Instituti</h3>
        <Section>
          <Buttons>
            <Button
              onClick={() => {
                setContent("video");
                setActiveButton(1);
              }}
              className={activeButton === 1 ? "activeButton" : ""}
            >
              Video
            </Button>
            <Button
              onClick={() => {
                setContent("fotogallery");
                setActiveButton(2);
              }}
              className={activeButton === 2 ? "activeButton" : ""}
            >
              Fotogalereya
            </Button>
            <Button
              onClick={() => {
                setContent(null);
                setActiveButton(3);
              }}
              className={activeButton === 3 ? "activeButton" : ""}
            >
              Videogalereya
            </Button>
          </Buttons>
        </Section>
        <Section>{renderContent()}</Section>
      </Wrapper>
    </Container>
  );
};

export default VideoGallery;
