import { useMediaQuery } from "@mui/material";
import React from "react";
import Hero from "../components/Header/Hero";

const Header = () => {
  const match935 = useMediaQuery("(min-width: 935px)");
  return (
    <section id="header" style={{height: match935 ? '100%' : '800px'}}>
      <Hero />
    </section>
  );
};

export default Header;
