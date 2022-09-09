import { Container, Stack } from "@mui/system";
import React, { useState } from "react";
import SkillSide from "../components/Description/SkillSide";
import VideoModal from "../components/Description/VideoModal";
import VideoSide from "../components/Description/VideoSide";

const Description = () => {
  const [openModal, setOpenModal] = useState(false);

  return <section id="description">
    <Container>
      <Stack direction='row'>
        <VideoSide setOpenModal={setOpenModal} />
        <SkillSide />
        <VideoModal openModal={openModal} setOpenModal={setOpenModal} />
      </Stack>

    </Container>
  </section>;
};

export default Description;
