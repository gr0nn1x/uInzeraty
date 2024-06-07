import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
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

interface CategoriesSidebarProps {
  onCategorySelect: (category: string) => void;
}

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

const sidebarStyle: React.CSSProperties = {
  borderRight: "1px solid #ccc",
  padding: "1rem",
  width: "200px",
  backgroundColor: "#fff",
  position: "fixed",
  left: 0,
  top: "4rem",
  bottom: 0,
};

const buttonStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "0.5rem",
  marginBottom: "0.5rem",
  textAlign: "left",
  color: "#000",
};

const iconStyle: React.CSSProperties = {
  marginRight: "1rem",
};

const scrollContainerStyle: React.CSSProperties = {
  maxHeight: "calc(100vh - 4rem)",
  overflowY: "auto",
};

const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 5px; /* Set the width of the scrollbar */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Set the color of the scrollbar thumb */
  }
`;

export default function CategoriesSidebar({ onCategorySelect }: CategoriesSidebarProps) {
  return (
    <div style={{ ...sidebarStyle, ...scrollContainerStyle }}>
      <style>{scrollbarStyle}</style>
      <Typography variant="h6" color="textPrimary" style={{ textAlign: "center", fontWeight: "bold" }}>Kategorie</Typography>
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
    </div>
  );
}
