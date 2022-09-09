import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoSide = ({setOpenModal}) => {
  return (
    <Stack flexBasis="50%" alignItems="start">
      <Typography
        variant="h6"
        component="h4"
        marginBottom="15px"
        className="section-info"
      >
        Why Choose Finibus
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        fontWeight={700}
        marginBottom="15px"
      >
        Success Is Just Around The Next Online Corner
      </Typography>
      <Box
        width="100%"
        height="500px"
        className="video-box"
        position="relative"
      >
        <img
          src="https://finibus-react.b-cdn.net/images/play-video.jpg"
          alt="success"
          style={{ width: "100%", height: "100%" }}
        />
        <Stack
          position="absolute"
          top="50%"
          left="50%"
          backgroundColor="transparent"
          color="#fff"
          border="1px solid #fff"
          borderRadius="50%"
          width="150px"
          height="150px"
          justifyContent="center"
          alignItems="center"
          className="play-now"
          onClick={() => setOpenModal(true)}
        >
          <Typography variant="h6" component="h4" position='relative' marginLeft="20px">
            <PlayArrowIcon style={{position: 'absolute', top: '10%', left: '-30%'}} />
            Play Now
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default VideoSide;
