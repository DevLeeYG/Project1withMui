import React, { useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import { Props } from "./Props";
import Link from "next/link";

const MenuBox = styled.div`
  text-align: center;

  a {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
type homemanu = {
  marginRight: string;
  marginLeft: string;
};

let styles: homemanu = {
  marginRight: "50px",
  marginLeft: "50px",
};

const AppLayout = ({ children }: Props) => {
  const isXs = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            {isXs ? (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                <Link passHref href="/">
                  <a> News</a>
                </Link>
              </Typography>
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link passHref href="/">
                  <a> News</a>
                </Link>
              </Typography>
            )}
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link passHref href="/about">
                <a style={styles}>about</a>
              </Link>
              <Link href="/journal">
                <a style={styles}>journal</a>
              </Link>
              <Link href="/contact">
                <a style={styles}>contact</a>
              </Link>
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
};

export default AppLayout;

{
  //     const isXs = useMediaQuery("(max-width:768px)");
  //   /* <IconButton
  // size="large"
  // edge="start"
  // color="inherit"
  // aria-label="menu"
  // sx={{ mr: 2 }}
  // >
  // <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
  // </IconButton> */
}

// {isXs ? null : <Button color="inherit">Login</Button>}
