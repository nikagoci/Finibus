import { Slide, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

const NewsCard = ({ img }) => {
  const [showLink, setShowLink] = useState(false);
  const containerRef = useRef(null);

  let height;
  if (
    img === "https://finibus-react.b-cdn.net/images/partner-icons/partner-4.png"
  ) {
    height = "20%";
  } else {
    height = "40%";
  }
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      backgroundColor="#212121"
      width="200px"
      height="70px"
      borderRadius="20px"
      onMouseOver={() => setShowLink(true)}
      onMouseOut={() => setShowLink(false)}
      ref={containerRef}
      sx={{
        ":hover": {
          background:
            "linear-gradient(152.97deg,hsla(0,0%,100%,.2),hsla(0,0%,100%,0));",
          transition: "all .3s ease-in-out",
        },
      }}
    >
      {!showLink ? (
        <img src={img} alt="web" style={{ height: height }} />
      ) : (
        <Slide direction="up" in={true} container={containerRef.current} timeout={500}>
            <Typography variant="subtitle1" component='p' color="#f3f3f3">
                www.example.com
            </Typography>
        </Slide>
      )}
    </Stack>
  );
};

export default NewsCard;
