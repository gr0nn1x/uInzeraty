import React from "react"; // Importuje základní knihovnu React
import ListItemButton from "@mui/material/ListItemButton"; // Importuje komponentu ListItemButton z Material-UI
import ListItemIcon from "@mui/material/ListItemIcon"; // Importuje komponentu ListItemIcon z Material-UI
import ListItemText from "@mui/material/ListItemText"; // Importuje komponentu ListItemText z Material-UI
import { Link } from "react-router-dom"; // Importuje komponentu Link z react-router-dom pro navigaci mezi stránkami
import ComputerIcon from "@mui/icons-material/Computer"; // Importuje ikonu ComputerIcon z Material-UI ikon
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Importuje ikonu DirectionsCarIcon z Material-UI ikon
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"; // Importuje ikonu SportsEsportsIcon z Material-UI ikon
import HomeIcon from "@mui/icons-material/Home"; // Importuje ikonu HomeIcon z Material-UI ikon
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy"; // Importuje ikonu LocalPharmacyIcon z Material-UI ikon
import ToysIcon from "@mui/icons-material/Toys"; // Importuje ikonu ToysIcon z Material-UI ikon
import PetsIcon from "@mui/icons-material/Pets"; // Importuje ikonu PetsIcon z Material-UI ikon
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"; // Importuje ikonu SportsSoccerIcon z Material-UI ikon
import MenuBookIcon from "@mui/icons-material/MenuBook"; // Importuje ikonu MenuBookIcon z Material-UI ikon
import HistoryIcon from "@mui/icons-material/History"; // Importuje ikonu HistoryIcon z Material-UI ikon
import EmojiNatureIcon from "@mui/icons-material/EmojiNature"; // Importuje ikonu EmojiNatureIcon z Material-UI ikon
import ClothesIcon from "@mui/icons-material/ShoppingBag"; // Importuje ikonu ClothesIcon z Material-UI ikon
import ToolsIcon from "@mui/icons-material/Build"; // Importuje ikonu ToolsIcon z Material-UI ikon
import ListAltIcon from "@mui/icons-material/ListAlt"; // Importuje ikonu ListAltIcon z Material-UI ikon
import AddIcon from "@mui/icons-material/Add"; // Importuje ikonu AddIcon z Material-UI ikon

// Definice kategorií, každá kategorie má ikonu a text
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

// CSS styly pro různé části sidebaru
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

// CSS styly pro vlastní scrollbar
const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 5px; /* Nastavení šířky scrollbar */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Nastavení barvy scrollbar thumb */
  }
`;

// Hlavní komponenta Navbar
export default function Navbar({ currentPage, onCategorySelect }) {
  return (
    <div style={Navbarrtzgegrg}>
      <div style={sidebarStyle}>
        <style>{scrollbarStyle}</style> {/* Aplikace stylů pro scrollbar */}
        <div style={logoStyle}>
          <img src="/logo.png" alt="Logo" style={logoImgStyle} /> {/* Zobrazení loga */}
        </div>
        <div style={separatorStyle}></div> {/* Oddělovač */}
        <div style={inzeratyStyle}>
          <Link to="/">
            <ListItemButton onClick={() => onCategorySelect("")} style={buttonStyle}>
              <ListItemIcon style={iconStyle}><ListAltIcon /></ListItemIcon>
              <ListItemText primary="Všechny inzeráty" /> {/* Tlačítko pro zobrazení všech inzerátů */}
            </ListItemButton>
          </Link>
          {currentPage === "main" && (
            <Link to="/createpost">
              <ListItemButton style={buttonStyle}>
                <ListItemIcon style={iconStyle}><AddIcon /></ListItemIcon>
                <ListItemText primary="Vytvořit inzerát" /> {/* Tlačítko pro vytvoření nového inzerátu */}
              </ListItemButton>
            </Link>
          )}
        </div>
        <div style={separatorStyle}></div> {/* Oddělovač */}
        <div style={categoryStyle}>
          {currentPage === "main" && (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {categories.map(({ icon, text }, index) => (
                <li key={index}>
                  <ListItemButton onClick={() => onCategorySelect(text)} style={buttonStyle}>
                    <ListItemIcon style={iconStyle}>{icon}</ListItemIcon>
                    <ListItemText primary={text} /> {/* Tlačítko pro výběr kategorie */}
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
