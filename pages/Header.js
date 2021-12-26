import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";

const Header = () => {
  const isXs = useMediaQuery("(max-width:1000px)");
  return (
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
            <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
          </IconButton>
          {isXs ? (
            <Typography
              className="Heder-Typography"
              variant="h6"
              component="div"
              sx={{
                textAlign: "center",
                flexGrow: 1,
              }}
            >
              News
            </Typography>
          ) : (
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              News
            </Typography>
          )}

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
