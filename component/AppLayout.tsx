import React, { useMemo, useState } from "react";
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
import AccountModal from "../component/Navdetail/AccountModal";
import Sidebar from "./com/Sidebar";

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
  const [sidebar, setSidebar] = useState<Boolean>(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar
            sx={{ position: "fixed", width: "100%", backgroundColor: "black" }}
          >
            <Sidebar />

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
            <Box
              sx={{
                flexGrow: 1,

                display: { xs: "none", sm: "block" },
              }}
            >
              <Link passHref href="/stars/pick">
                <a style={styles}>STAR'S</a>
              </Link>
              <Link passHref href="/journal">
                <a style={styles}>journal</a>
              </Link>
              <Link passHref href="/contact">
                <a style={styles}>contact</a>
              </Link>
            </Box>
            {isXs ? null : <AccountModal>Login</AccountModal>}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ height: 64 }} />
      <Box>{children}</Box>
    </div>
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
