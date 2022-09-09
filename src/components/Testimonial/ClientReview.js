import { Avatar, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React from "react";

const ClientReview = ({name, job, img, text}) => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        marginTop="50px"
        marginBottom="40px"
      >
        <Avatar
          src={img}
          alt="client"
          sx={{ width: "80px", height: "80px", marginRight: "20px" }}
        />
        <Stack justifyContent="center">
          <Typography variant="h5" component="h5">
            {name}
          </Typography>
          <Typography variant="h6" component="h6" color="#949494">
            {job}
          </Typography>
        </Stack>
      </Stack>
      <Box width="80%" margin="0 auto">
        <Typography
          variant="subtitle1"
          component="p"
          textAlign="center"
          marginBottom="40px"
        >
          <FormatQuoteIcon /> {text} <FormatQuoteIcon />
        </Typography>
      </Box>
      <Box textAlign="center">
        <Rating value={5} readOnly size="large" />
      </Box>
    </Box>
  );
};

export default ClientReview;
