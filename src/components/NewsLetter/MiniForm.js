import { Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MiniForm = () => {
  return (
    <Stack
      flexBasis="50%"
      className="mini-form"
      alignItems="center"
      padding="133px 0"
    >
      <Typography
        variant="h6"
        component="h4"
        marginBottom="15px"
        className="section-info"
        sx={{borderBottom: 'none'}}
      >
        Get In Touch
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        fontWeight={700}
        marginBottom="35px"
      >
        SUBSCRIBE OUR <br /> <span className="market">NEWSLETTER</span>
      </Typography>
      <TextField
        label="Type Your Email"
        sx={{
          background: "#fff",
          width: "70%",
          borderRadius: "50px",
          position: "relative",
          marginBottom: "25px",
        }}
        variant="filled"
        InputProps={{ disableUnderline: true }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          background: "#d90a2c",
          width: "130px",
          height: "50px",
          borderRadius: "20px",
          fontSize: "1.3rem",
          ':hover': {
            background: 'transparent',
            border: '2px solid #d90a2c'
          }
        }}
      >
        SUBMIT
      </Button>
    </Stack>
  );
};

export default MiniForm;
