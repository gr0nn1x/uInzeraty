import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import ComputerIcon from "@mui/icons-material/Computer";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeIcon from "@mui/icons-material/Home";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import ToysIcon from "@mui/icons-material/Toys";
import PetsIcon from "@mui/icons-material/Pets";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HistoryIcon from "@mui/icons-material/History";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import ClothesIcon from "@mui/icons-material/ShoppingBag";
import ToolsIcon from "@mui/icons-material/Build";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddIcon from "@mui/icons-material/Add";

const categories = [
  { icon: <ComputerIcon />, text: "Elektronika" },
  { icon: <DirectionsCarIcon />, text: "Vozidla" },
  { icon: <SportsEsportsIcon />, text: "Gaming" },
  { icon: <HomeIcon />, text: "Domácnost" },
  { icon: <LocalPharmacyIcon />, text: "Drogérie" },
  { icon: <ToysIcon />, text: "Hračky" },
  { icon: <PetsIcon />, text: "Zvířata" },
  { icon: <SportsSoccerIcon />, text: "Sport" },
  { icon: <MenuBookIcon />, text: "Knihy" },
  { icon: <HistoryIcon />, text: "Historické" },
  { icon: <EmojiNatureIcon />, text: "Zahrada" },
  { icon: <ClothesIcon />, text: "Oblečení a obuv" },
  { icon: <ToolsIcon />, text: "Nářadí" },
];

const sidebarStyle = {
  borderRight: "1px solid #ccc",
  padding: "1rem",
  minWidth: "250px",
  width: "250px",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  position: "fixed", 
  top: 0, 
  left: 0,
  height: "100vh",
  overflowY: "auto",
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "0.5rem",
  textAlign: "left",
  color: "#000",
};

const iconStyle = {
  marginRight: "1rem",
};

const categoryStyle = {
  flex: 1,
  overflowY: "auto",
};

const inzeratyStyle = {
  overflowY: "auto",
};

const logoStyle = {
  textAlign: "center",
  marginBottom: "1rem",
};

const separatorStyle = {
  height: "1px",
  backgroundColor: "#ccc",
  margin: "0.5rem 0",
};

const logoImgStyle = {
  maxWidth: "100%",
  height: "auto",
  display: "block",
  margin: "0 auto",
};

const Navbarrtzgegrg = {
  float: "left",
};

const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 5px; /* Set the width of the scrollbar */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Set the color of the scrollbar thumb */
  }
`;

export default function Navbar({ currentPage, onCategorySelect }) {
  return (
    <div style={Navbarrtzgegrg}>
    <div style={sidebarStyle}>
      <style>{scrollbarStyle}</style>
      <div style={logoStyle}>
        <img src="/logo.png" alt="Logo" style={logoImgStyle} />
      </div>
      <div style={separatorStyle}></div>
      <div style={inzeratyStyle}>
        <Link to="/">
          <ListItemButton onClick={() => onCategorySelect("")} style={buttonStyle}>
            <ListItemIcon style={iconStyle}><ListAltIcon /></ListItemIcon>
            <ListItemText primary="Všechny inzeráty" />
          </ListItemButton>
        </Link>
        {currentPage === "main" && (
          <Link to="/createpost">
            <ListItemButton style={buttonStyle}>
              <ListItemIcon style={iconStyle}><AddIcon /></ListItemIcon>
              <ListItemText primary="Vytvořit inzerát" />
            </ListItemButton>
          </Link>
        )}
      </div>
      <div style={separatorStyle}></div>
      <div style={categoryStyle}>
        {currentPage === "main" && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {categories.map(({ icon, text }, index) => (
              <li key={index}>
                <ListItemButton onClick={() => onCategorySelect(text)} style={buttonStyle}>
                  <ListItemIcon style={iconStyle}>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
}
