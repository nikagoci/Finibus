import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const BottomSide = () => {
  return (
    <Stack direction="row">
      <Typography variant="subtitle1" component="h6" flexBasis="50%">
        Copyright 2022 <b>Finibus</b> | Design By <b>Egens Lab</b>
      </Typography>
      <Stack direction="row" flexBasis="50%" justifyContent='end'>
        <Typography variant="subtitle1" component="h6" marginRight="25px" className="policy">
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" component="h6" marginRight="25px" className="policy">
          Terms of Use
        </Typography>
        <Typography variant="subtitle1" component="h6" marginRight="25px" className="policy">
          Support Policy
        </Typography>
        <Typography variant="subtitle1" component="h6" marginRight="25px" className="different">
          Terms of Service
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BottomSide;
