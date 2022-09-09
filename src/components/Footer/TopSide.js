import { IconButton, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";

const TopSide = () => {
  return (
    <Stack direction="row" marginBottom='50px' borderBottom='2px solid #292929' paddingBottom='50px'>
      <Stack flexBasis="25%" alignItems='start'>
        <Box marginBottom="25px">
          <img
            src="https://finibus-react.b-cdn.net/images/logo.png"
            alt="logo"
          />
        </Box>
        <Typography
          variant="h6"
          component="h4"
          color="#fff"
          marginBottom="15px"
          className="section-info"
        >
          Office
        </Typography>
        <Typography variant="subtitle1" component="h6" marginBottom="25px">
          168/170, Avenue 01, Mirpur DOHS, Bangladesh
        </Typography>
        <Stack direction="row" justifyContent="space-between" width='85%'>
          <IconButton
          className="iconKeeper"
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #28292b",
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
          className="iconKeeper"
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #28292b",
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
          className="iconKeeper"
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #28292b",
            }}
          >
            <PinterestIcon />
          </IconButton>
          <IconButton
          className="iconKeeper"
            sx={{
              backgroundColor: "#333",
              color: "#fff",
              border: "1px solid #28292b",
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack flexBasis="25%" alignItems='start'>
        <Typography
          variant="h4"
          component="h3"
          marginBottom="35px"
          fontWeight={700}
        >
          Our Services
        </Typography>
        <Stack component="ul" height="250px" justifyContent="space-between">
          <li>Stategy & Research</li>
          <li>Web Development</li>
          <li>Web Solution</li>
          <li>Digital Marketing</li>
          <li>App Design</li>
          <li>App Development</li>
        </Stack>
      </Stack>
      <Stack flexBasis="25%" alignItems='start'>
        <Typography
          variant="h4"
          component="h3"
          marginBottom="35px"
          fontWeight={700}
        >
          Company
        </Typography>
        <Stack component="ul" height="250px" justifyContent="space-between">
          <li>About us</li>
          <li>Services</li>
          <li>Project</li>
          <li>Blog</li>
          <li>Career</li>
          <li>Pricing Plan</li>
        </Stack>
      </Stack>
      <Stack flexBasis="25%" alignItems='start'>
        <Typography
          variant="h4"
          component="h3"
          marginBottom="35px"
          fontWeight={700}
        >
          Contacts
        </Typography>
        <Stack direction="row" alignItems="center" marginBottom="20px">
          <PhoneIcon
            style={{ marginRight: "15px", color: "red", fontSize: "30px" }}
          />
          <Stack>
            <Typography variant="subtitle1" component="h6" className='icon-content'>
              +880 566 1111 985
            </Typography>
            <Typography variant="subtitle1" component="h6" className='icon-content'>
              +880 566 1111 985
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" marginBottom="20px">
          <MailIcon
            style={{ marginRight: "15px", color: "red", fontSize: "30px" }}
          />
          <Stack>
            <Typography variant="subtitle1" component="h6" className='icon-content'>
              info@example.com
            </Typography>
            <Typography variant="subtitle1" component="h6" className='icon-content'>
              info@example.com
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center">
          <RoomIcon
            style={{ marginRight: "15px", color: "red", fontSize: "30px" }}
          />
          <Stack>
            <Typography variant="subtitle1" component="h6">
              168/170, Avenue 01, Mirpur DOHS, Bangladesh
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TopSide;
