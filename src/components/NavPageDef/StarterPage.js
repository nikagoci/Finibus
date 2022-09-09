import { Breadcrumbs, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StarterPage = ({title}) => {
  const breadcrumbs = [
    <Link to="/" key="1" style={{textDecoration: 'none', color: "#d90a2c", fontSize: '17px'}}>
      Home
    </Link>,
    <Link to="/service" key="2" style={{textDecoration: 'none', color: '#fff', fontSize: '17px', textTransform: 'uppercase'}}>
      {title}
    </Link>,
  ];

  return (
    <section className="starter-page" style={{ padding: "90px 0 200px 0" }}>
      <Container>
        <Typography className="project" fontSize="65px">
          {title}
        </Typography>
        <Breadcrumbs
          separator={
            <img src="https://finibus-react.b-cdn.net/images/icons/breadcrumb-arrow.svg" alt="icon" />
          }
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Container>
    </section>
  );
};

export default StarterPage;
