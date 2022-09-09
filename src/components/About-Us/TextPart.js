import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const TextPart = () => {
  return (
    <Box flexBasis="55%">
      <Typography variant="h6" component="h4" marginBottom='15px' className="section-info">
        About Us
      </Typography>
      <Typography variant="h3" component="h3" fontWeight={700} marginBottom="20px">
        Direction With Our Company.
      </Typography>
      <Typography variant="subtitle1" component="p" marginBottom='20px'>
        Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor.
        Classe aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu
        quis ei Donec lacinia placerat felis non aliquam.Integer purus odio.
      </Typography>
      <Stack direction='row' justifyContent='space-between' alignItems='center' marginBottom='40px'>
        <img src="https://finibus-react.b-cdn.net/images/icons/mission-icon.png" alt="mission" />
        <div style={{flexBasis: '50%'}}>
            <Typography variant="h6" compnent="h5" fontWeight={600}>Our Mission</Typography>
            <Typography variant="subtitle1" compnent="p">Integer purus odio, placerat nec rhoni olor Class online and video.</Typography>
        </div>
        <img src="https://finibus-react.b-cdn.net/images/ctoFounder.png" alt="founder" />
      </Stack>
      <Button variant="container" className="quote-button">About More</Button>
    </Box>
  );
};

export default TextPart;
