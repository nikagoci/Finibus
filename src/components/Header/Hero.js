import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";

const Hero = () => {
  const match1300 = useMediaQuery("(min-width: 1300px)");
  const match935 = useMediaQuery("(min-width: 935px)");

  let boxWidth;
  let boxHeight;

  if (!match1300) {
    boxWidth = "500px";
    boxHeight = "400px";
  } else if (!match935) {
    boxWidth = "100%";
    boxHeight = "100%";
  } else {
    boxWidth = "700px";
    boxHeight = "550px";
  }

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        className="hero"
        position="relative"
      >
        {match935 && (
          <Box sx={{ flexBasis: match1300 ? "60%" : "40%", height: "600px" }}>
            <img
              src="https://finibus-react.b-cdn.net/images/hero-slider-3.png"
              alt="frients"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "100px 35px 35px 35px",
              }}
            />
          </Box>
        )}

        {match935 ? (
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: "45%",
              background:
                "linear-gradient(233.77deg,rgba(217,10,44,.8) .94%,rgba(115,0,0,.8) 99.09%)",
              borderRadius: "20px",
              width: boxWidth,
              height: boxHeight,
              padding: match1300 ? "60px" : "30px",
            }}
          >
            <Typography
              variant={match1300 ? "h2" : "h4"}
              component="h2"
              textTransform="uppercase"
              textAlign="center"
              fontWeight="700"
              marginBottom={match1300 ? "4.5rem" : "1.5rem"}
            >
              Best Solution For <br /> Your{" "}
              <span className="market">Markets.</span>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              fontWeight={300}
              textAlign="center"
              marginBottom={match1300 ? "4.5rem" : "1.5rem"}
            >
              Curabitur sed facilisis erat. Vestibulum pharetra eros eget
              fringilla an Duis a orci nunc. Suspendisse ac convallis sapien,
              quis commodosani libero. Donec nec dui luctus, pellentesque lacus
              sed, mollis leo.
            </Typography>
            <Stack direction="row" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  background: "#17161a",
                  width: "170px",
                  height: "50px",
                  borderRadius: "40px",
                  marginRight: "20px",
                  ":hover": {
                    background: "#333333",
                  },
                }}
              >
                About Us
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  border: "1px solid #fff",
                  borderRadius: "40px",
                  height: "50px",
                  width: "170px",
                  ":hover": {
                    border: "1px solid #333333",
                  },
                }}
              >
                How we work
              </Button>
            </Stack>
          </Box>
        ) : (
          <Stack
            sx={{
              background:
                "linear-gradient(233.77deg,rgba(217,10,44,.8) .94%,rgba(115,0,0,.8) 99.09%)",
              borderRadius: "20px",
              width: "100%",
              height: "400px",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              textTransform="uppercase"
              textAlign="center"
              fontWeight="700"
              marginBottom={match1300 ? "4.5rem" : "1.5rem"}
            >
              Best Solution For <br /> Your{" "}
              <span className="market">Markets.</span>
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              fontWeight={300}
              textAlign="center"
              marginBottom={match1300 ? "4.5rem" : "1.5rem"}
            >
              Curabitur sed facilisis erat. Vestibulum pharetra eros eget
              fringilla an Duis a orci nunc. Suspendisse ac convallis sapien,
              quis commodosani libero. Donec nec dui luctus, pellentesque lacus
              sed, mollis leo.
            </Typography>
            <Stack direction="row" justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  background: "#17161a",
                  width: "170px",
                  height: "50px",
                  borderRadius: "40px",
                  marginRight: "20px",
                  ":hover": {
                    background: "#333333",
                  },
                }}
              >
                About Us
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#fff",
                  border: "1px solid #fff",
                  borderRadius: "40px",
                  height: "50px",
                  width: "170px",
                  ":hover": {
                    border: "1px solid #333333",
                  },
                }}
              >
                How we work
              </Button>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};

export default Hero;
