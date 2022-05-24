import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
//assets
import "./css/navbar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
//scroll

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });
 // make a const that carry the class then go and change it cd
  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "rgb(221 232 235)" : "transparent",
      color: trigger ? "black" : "#fff",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: trigger ?"none !important" :"0px 2px 4px -1px #000)",
      padding: "0px 0px",
      borderBottom: "1px solid var(--skfb-grey-5,#e7e7e7)",
    },
  });
};

const ScrollToColor01 = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

const MainNavBar = () => {
  return (
    <>
      <ScrollToColor01 position="fixed">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <NavLink to="/login" className="logIn-nv nav-btn-ls ">
                Login
              </NavLink>
              <NavLink to="/Signup" className="logIn-nv nav-btn-ls ">
              Signup
              </NavLink>
              
              <NavLink to="/BuyerAccount" className="logIn-nv nav-btn-ls ">
             
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              
              </NavLink>
            </Toolbar>
          </AppBar>
        </Box>
      </ScrollToColor01>
    </>
  );
};

export default MainNavBar;
