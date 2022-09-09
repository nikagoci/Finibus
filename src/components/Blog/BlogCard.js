import { Avatar, Card, Fade, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

const BlogCard = ({title, img, post, date, header, par, backgroundImg}) => {
  const [isHovered, setIsHovered] = useState(false);

    const background = !isHovered ? '#232226' : '#d90a2c'

  return (
    <Card
      onMouseOut={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
      sx={{ width: "40%", height: "100%", padding: "40px 20px" }}
    >
      <Stack
        width="180px"
        alignItems="center"
        justifyContent="center"
        height="35px"
        backgroundColor={background}
        color="#fff"
      >
        <Typography varinat="h6" component="h6">
          {title}
        </Typography>
      </Stack>
      {!isHovered ? (
        <>
          <Stack
            direction="row"
            justifyContent="start"
            marginTop="30px"
            marginBottom="30px"
          >
            <Avatar
              src={img}
              alt="client"
              sx={{ width: "50px", height: "50px", marginRight: "20px" }}
            />
            <Stack justifyContent="center">
              <Typography variant="h5" component="h5">
                {post}
              </Typography>
              <Typography variant="subtitle1" component="h6" color="#949494">
                {date}
              </Typography>
            </Stack>
          </Stack>
          <Typography
            variant="h5"
            component="h3"
            fontWeight={700}
            marginBottom="20px"
          >
            {header}
          </Typography>
        </>
      ) : (
        <Stack margin="20px 0" height="230px">
          <Fade in={true} timeout={700}>
            <img
              src={backgroundImg}
              alt="img"
              style={{ height: "100%", width: "100%" }}
            />
          </Fade>
        </Stack>
      )}
      <Typography variant="subtitle1" component="p" marginBottom="20px">
        {par}
      </Typography>
      <Typography
        fontSize="20px"
        className="details"
        variant="subtitle1"
        fontWeight={500}
        component="h5"
      >
        View Details
      </Typography>
    </Card>
  );
};

export default BlogCard;
