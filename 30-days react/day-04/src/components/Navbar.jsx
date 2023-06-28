import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
} from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MailIcon from "@mui/icons-material/Mail";
import { pink } from "@mui/material/colors";
import PageviewIcon from "@mui/icons-material/Pageview";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    color: "black",
    margin: "3px",
    padding: "3px",
    background: "white",
    // width: "40%",
    borderRadius: theme.shape.borderRadius,
  }));

  // const inputSearch = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   alignItems: "center",
  //   justifyContent: "center",
  //   background: "white",
  //   color: "white",
  //   borderRadius: "3px",
  // }));
  // usestate hook
  const [open, setOpen] = useState(false);
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
          {/* icons list  */}

          <Stack
            spacing={4}
            direction="row"
            sx={{
              color: "action.active",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: pink[500], display: { xs: "none" } }}>
              <PageviewIcon />
            </Avatar>
            <Avatar alt="Remy Sharp" src="" sx={{ display: { xs: "none" } }} />

            <Badge
              color="secondary"
              badgeContent={0}
              showZero
              sx={{
                display: {
                  lg: "none",
                  xs: "none",
                },
              }}
            >
              <MailIcon />
            </Badge>
          </Stack>
          <Stack
            spacing={4}
            direction="row"
            sx={{
              color: "action.active",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar alt="Remy Sharp" src="" onClick={e=>setOpen(true)} />

            {/* Menu on click is here  */}
            <Menu
              id="basic-menu"
              open={open}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              onClose={e=>setOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
                
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "canter",
              }}
            >
              <MenuItem onClick={(e) => setOpen(true)}>Profile</MenuItem>
              <MenuItem onClick={(e) => setOpen(true)}>My account</MenuItem>
              <MenuItem onClick={(e) => setOpen(true)}>Logout</MenuItem>
            </Menu>
          </Stack>

          <Search
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <inputSearch>
              <InputBase placeholder=" Search ANY things....." />
            </inputSearch>
          </Search>
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
              sx={{ display: { xs: "none", sm: "block" } }}
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
