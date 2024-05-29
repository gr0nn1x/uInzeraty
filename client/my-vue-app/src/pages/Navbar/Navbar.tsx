import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { mainListItems, secondaryListItems } from "./listItems";
import { colors } from "@mui/material";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "fixed", // Set position to fixed
    top: 0, // Align to the top of the viewport
    bottom: 0, // Align to the bottom of the viewport
    zIndex: theme.zIndex.drawer,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    overflowX: "hidden",
    height: "100vh", // Set height to 100% of viewport height
  },
}));
const Navbar: React.FC = () => {

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open>
        <div style={{ overflow: "auto", marginTop: 0, backgroundColor: "#D41A1A", color: "White" }}>
          <a href="/">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ margin: "20px auto", display: "block", maxWidth: "40%", cursor: "pointer"}}
            />
          </a>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default Navbar;
