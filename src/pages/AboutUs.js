import { Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AboutTeam from "../components/About-Us/AboutTeam";
import ImagePart from "../components/About-Us/ImagePart";
import TextPart from "../components/About-Us/TextPart";

const AboutUs = () => {
  return (
    <section id="about-us">
      <Container>
        <Stack direction='row' marginBottom="100px">
          <TextPart />
          <ImagePart />
        </Stack>
        <AboutTeam />
      </Container>
    </section>
  );
};

export default AboutUs;
