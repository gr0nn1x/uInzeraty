import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { mainListItems, secondaryListItems } from "./listItems";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "fixed", 
    top: 0, 
    bottom: 0, 
    zIndex: theme.zIndex.drawer,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    overflowX: "hidden",
    height: "100vh",
  },
}));

const Navbar: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open>
        <div style={{ overflow: "auto", marginTop: 0 }}>
          <a href="/">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ margin: "20px auto", display: "block", maxWidth: "40%", cursor: "pointer" }}
            />
          </a>
          <List component="nav">
            {mainListItems}
            {secondaryListItems}
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default Navbar;
