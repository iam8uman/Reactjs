import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Stack, styled } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

const Navbar = () => {
  const iconInfinite = styled("div")(({theme})=>({
    fontSize: "35px",
    color: "black",
    margin: "3px",
    padding: "3px",
    background:"red"
  }));
  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            SumanPro
          </Typography>
          <iconInfinite/>

          <AllInclusiveIcon sx={{ display: { xs: "block", sm: "none" } }} />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              fontSize={"17px"}
              fontWeight={"200"}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              fontSize={"17px"}
              fontWeight={"200"}
            >
              About
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
              fontSize={"17px"}
              fontWeight={"200"}
            >
              Contact
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" }, }}
              fontSize={"17px"}
              fontWeight={"200"}
            >
              FAQs
            </Typography>
          </Stack>
          {/* <AllInclusiveIcon></AllInclusiveIcon> */}
        </Toolbar>
      </AppBar>{" "}
    </div>
  );
};

export default Navbar;
