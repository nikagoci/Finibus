import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PortfolioSlider = ({top, bottom, img}) => {
  return (
    <Box
      width="300px"
      height="400px"
      positon="relative"
      className="portfolio-data"
      marginLeft='75px'
    >
      <img
        src={img}
        alt="portfolio"
        style={{ width: "100%", height: "100%", borderRadius: "15px" }}
      />
      <Stack
        position="absolute"
        bottom="5%"
        left="113px"
        color="#e4e4e4"
        padding="20px"
        backgroundColor="#0f0f11"
        borderRadius="5px"
        width="230px"
        height="30%"
        justifyContent="space-between"
      >
        <Typography variant="h6" component="h6">
          {top}
        </Typography>
        <Typography variant="h5" component="h5">
          {bottom}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PortfolioSlider;
