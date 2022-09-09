import { Box, Container, Stack } from "@mui/system";
import { Typography, Button } from "@mui/material";
import React from "react";

import ServiceCard from '../components/Services/ServiceCard';

const icon = {
    icon1: 'https://finibus-react.b-cdn.net/images/icons/service-icon-1.png',
    icon2: 'https://finibus-react.b-cdn.net/images/icons/service-icon-2.png',
    icon3: 'https://finibus-react.b-cdn.net/images/icons/service-icon-3.png',
    icon4: 'https://finibus-react.b-cdn.net/images/icons/service-icon-4.png'
}

const text = {
    first: 'Fusce ornare mauris nisi, id fringilla turpis vehicula justo lectus, ultricies nec sem',
    second: 'Maecenas ut est in ante imperdiet laoreet eu quis elit laoreet Phasellus Door',
    third: 'Etiam eu ullamcorper ipsum. Pellentesque eu ipsum luctus libero euismod',
    fourth: 'Quisque in massa nunc. Etiam blandit tortor nisl, auctor vulputate felis convallis at.'
}

const header = {
    first: 'Web Design',
    second: 'App Design',
    third: 'Developing',
    fourth: 'Graphic Design'
}

const Services = ({children}) => {
  return (
    <section id="services" style={{background: '#111215'}}>
    <Container sx={{padding: '40px 0'}}>
      <Stack direction="row">
        <Box flexBasis="30%" >
          <Typography marginBottom="30px" className="section-info" variant="h6" component="h4">
            What We Do
          </Typography>
          <Typography variant="h2" component="h2" lineHeight={1.3} fontWeight={700} marginBottom="30px">
            We Work Perfomed For Client Happy.
          </Typography>
          <Button variant="container" className="quote-button" sx={{width: '200px'}}>View All Services</Button>
        </Box>
        <Stack direction="row" flexWrap="wrap" flexBasis='70%' gap="25px">
          <ServiceCard img={icon.icon1} text={text.first} header={header.first} />
          <ServiceCard img={icon.icon2} text={text.second} header={header.second} />
          <ServiceCard img={icon.icon3} text={text.third} header={header.third} />
          <ServiceCard img={icon.icon4} text={text.fourth} header={header.fourth} />
          {children}
        </Stack>
      </Stack>
    </Container>
    </section>
  );
};

export default Services;
