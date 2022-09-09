import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";

const PortfolioTop = () => {
  return (
    <Container>
      <Stack alignItems="start" justifyContent="start">
            <Typography
          variant="h6"
          component="h4"
          marginBottom="15px"
          className="section-info"
        >
          About Us
        </Typography>
        <Typography variant="h2" component="h3" fontWeight={700}>
            A Diversified <br /> Resilient Porfolio.
        </Typography>
      </Stack>
    </Container>
  );
};

export default PortfolioTop;
