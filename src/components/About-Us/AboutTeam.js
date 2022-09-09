import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import CountUp from 'react-countup';
import React from "react";

const AboutTeam = () => {
  return (
    <Stack className="about-team" width="100%" height="100%" direction="row" padding="20px" borderRadius="25px">
      <Stack flexBasis="25%" alignItems="center">
        <img src="https://finibus-react.b-cdn.net/images/icons/count-1.png" alt="project" style={{marginBottom: '20px'}} /> 
        <Typography variant="h3" component="h2" marginBottom='20px' color="#fff"><CountUp end={250} duration={8} />+</Typography>
        <Typography variant="h6" component="h3" color="#bdbdbd">Project Completed</Typography>
      </Stack>
      <Stack flexBasis="25%" alignItems="center">
        <img src="https://finibus-react.b-cdn.net/images/icons/count-2.png" alt="project" style={{marginBottom: '20px'}}/> 
        <Typography variant="h3" component="h2" marginBottom='20px' color="#fff"><CountUp end={150} duration={8} />+</Typography>
        <Typography variant="h6" component="h3" color="#bdbdbd">Satisfied Clients</Typography>
      </Stack>
      <Stack flexBasis="25%" alignItems="center"> 
        <img src="https://finibus-react.b-cdn.net/images/icons/count-3.png" alt="project" style={{marginBottom: '20px'}} /> 
        <Typography variant="h3" component="h2" marginBottom='20px' color="#fff"><CountUp end={150} duration={8} />+</Typography>
        <Typography variant="h6" component="h3" color="#bdbdbd">Expert Teams</Typography>
      </Stack>
      <Stack flexBasis="25%" alignItems="center">
        <img src="https://finibus-react.b-cdn.net/images/icons/count-4.png" alt="project" style={{marginBottom: '20px'}}/> 
        <Typography variant="h3" component="h2" marginBottom='20px' color="#fff"><CountUp end={250} duration={8} />+</Typography>
        <Typography variant="h6" component="h3" color="#bdbdbd">Win Awards</Typography>
      </Stack>
    </Stack>
  );
};

export default AboutTeam;
