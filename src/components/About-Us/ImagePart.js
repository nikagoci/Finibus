import { Box, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React from "react";

const ImagePart = () => {
  const progressBarWeb = 85;
  const progressBarApp = 68;

  return (
    <Box flexBasis="45%" marginLeft="25px" position="relative">
      <Stack position="relative" marginTop="70px">
        <div className="bottom-image">
          <img
            src="https://finibus-react.b-cdn.net/images/about-bottom.jpg"
            alt="about"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="top-image">
          <img
            src="https://finibus-react.b-cdn.net/images/about-top.png"
            alt="about"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>
      </Stack>
      <Card sx={{position: 'absolute', bottom: 0, left: 0, margin: '0 5%', width: '90%', borderRadius: '15px'}}>
        <Stack direction="row" padding="20px" alignItems="center">
          <Stack direction="row" alignItems="center">
            <CircularProgressbar
              value={progressBarWeb}
              text={`${progressBarWeb}%`}
            />
            <div>
              <Typography variant="h5" component="h5" textAlign="center">
                Web
              </Typography>
              <Typography variant="h6" component="h6" marginLeft="5px" fontWeight={300} textAlign="center">
                Clean Design
              </Typography>
            </div>
          </Stack>
          <Stack direction="row" alignItems="center">
            <CircularProgressbar
              value={progressBarApp}
              text={`${progressBarApp}%`}
            />
            <div>
              <Typography variant="h5" component="h5" textAlign="center">
                App
              </Typography>
              <Typography variant="h6" component="h6" marginLeft="5px" fontWeight={300} textAlign="center">
                Developing
              </Typography>
            </div>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default ImagePart;
