import { Stack } from "@mui/system";
import React from "react";
import Community from "../components/NewsLetter/Community";
import MiniForm from "../components/NewsLetter/MiniForm";

const NewsLetter = () => {
  return (
    <section id="newsletter">
        <Stack direction="row">
          <MiniForm />
          <Community />
        </Stack>
    </section>
  );
};

export default NewsLetter;
