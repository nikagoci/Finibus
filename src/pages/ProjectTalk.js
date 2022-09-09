import { Container, Stack } from "@mui/system";
import React from "react";
import ButtonSide from "../components/Lets Talk/ButtonSide";
import ProjectSide from "../components/Lets Talk/ProjectSide";

const ProjectTalk = () => {
  return (
    <section id="lets-talk" style={{padding: '60px 0'}}>
      <Container>
        <Stack direction="row">
          <ProjectSide />
          <ButtonSide />
        </Stack>
      </Container>
    </section>
  );
};

export default ProjectTalk;
