import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { mainListItems /* secondaryListItems */ } from "./listItems";

const drawerWidth: number = 300;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  "& .MuiDrawer-paper": {
    position: "fixed", // Set position to fixed
    top: 0, // Align to the top of the viewport
    bottom: 0, // Align to the bottom of the viewport

    zIndex: theme.zIndex.drawer,
    width: drawerWidth,
    boxSizing: "border-box",
    overflowX: "hidden",
    height: "100vh", // Set height to 100% of viewport height
    background: "#2E2E2E", // Set backgoundColor of the navbar
  },
}));

const Navbar: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent">
        <div
          style={{
            overflow: "auto",
            marginTop: 0,
            backgroundColor: "#2E2E2E",
            color: "White",
          }}
        >
          <a href="/">
            <div
              style={{
                overflow: "auto",
                margin: 100,
                fontSize: "20px",
                backgroundColor: "#2E2E2E",
                color: "White",
              }}
            >
              Rychlovka
            </div>
          </a>
          <List component="nav">
            <Divider style={{ border: "solid, #3F3F3F, 3px" }} />
            {mainListItems}
            <Divider sx={{ my: 1 }} style={{ border: "solid, #3F3F3F, 3px" }} />
            {/*   {secondaryListItems} */}
            <Divider style={{ border: "solid, #3F3F3F, 3px" }} />
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#000',
  textDecoration: 'none',
};

const categoriesStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
};

const categoryLinkStyle: React.CSSProperties = {
  color: '#000',
  textDecoration: 'none',
};

const loginStyle: React.CSSProperties = {
  color: '#007bff',
  textDecoration: 'none',
};

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/" style={logoStyle}>Bazaar</Link>
      </div>
      <div style={categoriesStyle}>
        <Link to="/category1" style={categoryLinkStyle}>Inzeráty</Link>
        <Link to="/category2" style={categoryLinkStyle}>Vytvořit inzerát</Link>
        <Link to="/category3" style={categoryLinkStyle}>O nás</Link>
      </div>
      <div>
        <Link to="/login" style={loginStyle}>Login</Link>
      </div>
    </nav>
  );
}
