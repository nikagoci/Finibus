import { Box, FormLabel, LinearProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const SkillSide = () => {
  const values = {
    webDesign: 85,
    appDevelopment: 75,
    backend: 55,
    videoAnimation: 65,
  };

  return (
    <Box heigth="100%" flexBasis="50%" paddingLeft="20px">
      <Box height="350px">
        <img
          src="https://finibus-react.b-cdn.net/images/valuable-skill.jpg"
          alt="skill"
          style={{ width: "100%", height: "100%" }}
        />
        <Stack height="100%" justifyContent="space-around">
          <Stack>
            <Typography variant="subtitle1" component="h6" marginBottom="10px">
              Web Design
            </Typography>
            <Stack direction='row' width="100%" alignItems="center">
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "rgb(217, 10, 44)",
                  },
                  backgroundColor: "rgba(217, 10, 44, 0.5)",
                  width: '80%',
                  marginRight: '15px'
                }}
                variant="determinate"
                value={values.webDesign}
              />
              <FormLabel sx={{fontWeight: 700}}>{`${values.webDesign}%`}</FormLabel>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle1" component="h6" marginBottom="10px">
              App Development
            </Typography>
            <Stack direction='row' width="100%" alignItems="center">
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "rgb(217, 10, 44)",
                  },
                  backgroundColor: "rgba(217, 10, 44, 0.5)",
                  width: '80%',
                  marginRight: '15px'
                }}
                variant="determinate"
                value={values.appDevelopment}
              />
              <FormLabel sx={{fontWeight: 700}}>{`${values.appDevelopment}%`}</FormLabel>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle1" component="h6" marginBottom="10px">
              Backend
            </Typography>
            <Stack direction='row' width="100%" alignItems="center">
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "rgb(217, 10, 44)",
                  },
                  backgroundColor: "rgba(217, 10, 44, 0.5)",
                  width: '80%',
                  marginRight: '15px'
                }}
                variant="determinate"
                value={values.backend}
              />
              <FormLabel sx={{fontWeight: 700}}>{`${values.backend}%`}</FormLabel>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle1" component="h6" marginBottom="10px">
              Video Animation
            </Typography>
            <Stack direction='row' width="100%" alignItems="center">
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "rgb(217, 10, 44)",
                  },
                  backgroundColor: "rgba(217, 10, 44, 0.5)",
                  width: '80%',
                  marginRight: '15px'
                }}
                variant="determinate"
                value={values.videoAnimation}
              />
              <FormLabel sx={{fontWeight: 700}}>{`${values.videoAnimation}%`}</FormLabel>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default SkillSide;
