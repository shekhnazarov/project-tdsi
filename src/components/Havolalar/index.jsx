import React from "react";
import {
  HavolaCard,
  Icons,
  Section,
  Wrapper,
  Container,
  HavolaBox,
} from "./style";
import { FaFileSignature } from "react-icons/fa";
import "../AnimationDivider/style.css";

const Havolalar = () => {
  return (
    <Container>
      <Wrapper>
        <h3 className="title">Tezkor havolalar</h3>
        <Section>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
          <HavolaBox>
            <HavolaCard className="havola-card">
              <Icons className="icons">
                <FaFileSignature className="icon-havola" />
              </Icons>
              <h4 className="links">Elektron hujjat aylanmasi</h4>
            </HavolaCard>
          </HavolaBox>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Havolalar;
