import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const Navbar = () => {
  return (
    <div>
      <AppBar
        position="sticky"
        color="primary"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Toolbar>
          <Typography variant="h6">SumanPro</Typography>
          {/* <AllInclusiveIcon sx={{display:{xs:"block", sm:"none"}}}/> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
