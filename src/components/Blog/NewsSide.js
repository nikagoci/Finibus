import { Box, Button, Typography } from "@mui/material";
import React from "react";

const NewsSide = () => {
  return (
    <Box flexBasis="35%">
      <Typography
        variant="h6"
        component="h4"
        marginBottom="35px"
        className="section-info"
      >
        Blog
      </Typography>
      <Typography
        variant="h3"
        component="h2"
        fontWeight={700}
        lineHeight={1.3}
        marginBottom="40px"
      >
        Latest News And Article Modern Design.
      </Typography>
      <Button
        variant="contained"
        className="quote-button"
        sx={{ width: "160px", height: "50px", fontSize: "13px" }}
      >
        View All Blog
      </Button>
    </Box>
  );
};

export default NewsSide;
