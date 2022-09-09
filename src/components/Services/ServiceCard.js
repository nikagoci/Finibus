import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Stack } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ServiceCard = ({ img, text, header }) => {
  return (
    <Box
      className="service-card"
      sx={{
        border: "1px solid #232323",
        borderRadius: "10px",
        width: "390px",
        padding: "20px",
        ":hover": {
          background:
            "radial-gradient(105.91% 105.91% at 37.1% 19.35%,rgba(217,10,44,.3) 0,rgba(217,10,44,0) 83.11%);",
          positon: "absolute",
          bottom: 0,
          right: 0,
        },
      }}
    >
      <Stack direction="row" alignItems="center">
        <div
          style={{
            marginTop: "25px",
            marginRight: "15px",
            backgroundColor: "red",
            borderRadius: "50%",
            width: "200px",
            height: "80px",
            textAlign: "center",
            flexBasis: "30%",
          }}
        >
          <img src={img} alt="icon" style={{ marginTop: "20px" }} />
        </div>

        <Box>
          <Typography
            variant="h6"
            component="h4"
            fontWeight={600}
            fontSize="23px"
            marginBottom="10px"
          >
            {header}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            textAlign="start"
            marginBottom="10px"
          >
            {text}
          </Typography>
          <Button component="div" variant="text" sx={{ color: "#d90a2c" }}>
            Read More
            <IconButton
              className="right-icon"
              sx={{
                position: "relative",
                top: 0,
                left: "10%",
                border: "1px solid #fcfcfc",
                width: "25px",
                height: "25px",
              }}
            >
              <KeyboardArrowRightIcon
                sx={{
                  position: "absolute",
                  bottom: "0%",
                  fontSize: "26px",
                  left: "-4%",
                  color: "red",
                }}
              />
            </IconButton>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ServiceCard;
