import {
  AppBar,
  IconButton,
  Toolbar,
  MenuItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sideCloseAnim, setSideCloseAnim] = useState(false);
  const navigate = useNavigate();
  const match1125 = useMediaQuery("(min-width: 1125px)");
  const match575 = useMediaQuery("(min-width: 575px)");

  const navigateService = () => {
    navigate("/service");
  };

  const openSide = () => {
    setShowSidebar(true);
    setSideCloseAnim(false);
  };

  const delayFunc = () => {
    setSideCloseAnim(true);
    setTimeout(() => {
      setShowSidebar(false);
    }, 1000);
  };

  return (
    <AppBar position="static" sx={{ background: "inherit" }}>
      {showSidebar && (
        <Stack
          height="100%"
          width="300px"
          position="absolute"
          top="0"
          left="0"
          backgroundColor="#242424"
          zIndex={5}
          className={`sidebar ${sideCloseAnim && "close"}`}
        >
          <MenuItem
            sx={{
              marginTop: "40px",
              marginBottom: "30px",
              borderBottom: "1px solid #d90a2c",
              paddingBottom: "25px",
            }}
          >
            <img
              src="https://finibus-react.b-cdn.net/images/logo.png"
              alt="logo"
              style={{ width: "60%", height: "100%" }}
            />
          </MenuItem>

          <MenuItem sx={{ marginBottom: "20px" }}>Home</MenuItem>
          <MenuItem sx={{ marginBottom: "20px" }}>About Us</MenuItem>
          <MenuItem sx={{ marginBottom: "20px" }}>Services</MenuItem>
          <MenuItem sx={{ marginBottom: "20px" }}>Projects</MenuItem>
          <MenuItem sx={{ marginBottom: "20px" }}>Blogs</MenuItem>
          <MenuItem sx={{ marginBottom: "20px" }}>Pages</MenuItem>
          <MenuItem sx={{ marginBottom: "20px" }}>Contact Us</MenuItem>
          {!match575 && (
            <Button
              className="quote-button"
              variant="contained"
              sx={{ marginLeft: "20px" }}
            >
              Get A Quote
            </Button>
          )}
        </Stack>
      )}
      <Container sx={{ marginTop: "20px" }}>
        <Toolbar>
          <div style={{ flexBasis: "30%" }}>
            <IconButton>
              <img
                src="https://finibus-react.b-cdn.net/images/logo.png"
                alt="logo"
              />
            </IconButton>
          </div>

          {match1125 ? (
            <Stack
              direction="row"
              sx={{
                flexBasis: "30%",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <MenuItem>Home</MenuItem>
              <MenuItem>About Us</MenuItem>
              <Stack className="service-parent">
                <MenuItem>
                  Services
                  <KeyboardArrowDownIcon />
                </MenuItem>
                <Stack className="service-child">
                  <MenuItem
                    className="dropdown-item"
                    sx={{ color: "#fff" }}
                    onClick={navigateService}
                  >
                    Service
                  </MenuItem>
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Service Details
                  </MenuItem>
                </Stack>
              </Stack>
              <Stack className="service-parent">
                <MenuItem>
                  Projects
                  <KeyboardArrowDownIcon />
                </MenuItem>
                <Stack className="service-child">
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Project
                  </MenuItem>
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Project Details
                  </MenuItem>
                </Stack>
              </Stack>

              <Stack className="service-parent">
                <MenuItem>
                  Blogs
                  <KeyboardArrowDownIcon />
                </MenuItem>
                <Stack className="service-child">
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Blog
                  </MenuItem>
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Blog Standart
                  </MenuItem>
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Blog Details
                  </MenuItem>
                </Stack>
              </Stack>

              <Stack className="service-parent">
                <MenuItem>
                  Pages
                  <KeyboardArrowDownIcon />
                </MenuItem>
                <Stack className="service-child">
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Comming Soon
                  </MenuItem>
                  <MenuItem className="dropdown-item" sx={{ color: "#fff" }}>
                    Error 404
                  </MenuItem>
                </Stack>
              </Stack>
              <MenuItem>Contact Us</MenuItem>
            </Stack>
          ) : (
            <Stack
              direction="row"
              sx={{
                flexBasis: "70%",
                marginRight: "35px",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              {showSidebar ? (
                <CloseIcon
                  onClick={delayFunc}
                  style={{
                    fontSize: "35px",
                    cursor: "pointer",
                    color: "#d90a2c",
                    transform: "all 2s ease-in-out",
                  }}
                  className="closeIcon"
                />
              ) : (
                <MenuIcon
                  onClick={openSide}
                  style={{
                    fontSize: "35px",
                    cursor: "pointer",
                    color: "#d90a2c",
                  }}
                />
              )}
            </Stack>
          )}

          {match575 && (
            <Stack
              sx={{
                flexBasis: "30%",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button className="quote-button" variant="contained">
                Get A Quote
              </Button>
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
