import { Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import React from "react";
import NewsCard from "./NewsCard";

const Community = () => {
  return (
    <>
      <Box flexBasis="50%" padding="40px 0" className='community'>
        <Stack alignItems="center" marginBottom='40px'>
          <Typography
            variant="h6"
            component="h4"
            marginBottom="35px"
            className="section-info"
          >
            OUR PARTNER
          </Typography>
          <Typography variant="h3" component="h3">
            Join Our Finibus Community.
          </Typography>
        </Stack>
        <Stack direction='row' flexWrap='wrap' gap="40px" rowGap='70px' padding='0 20px' justifyContent='center'>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-1.png" />
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-2.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-3.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-4.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-5.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-6.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-7.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-8.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-9.png"/>
          <NewsCard img="https://finibus-react.b-cdn.net/images/partner-icons/partner-10.png"/>
        </Stack>
      </Box>
    </>
  );
};

export default Community;
