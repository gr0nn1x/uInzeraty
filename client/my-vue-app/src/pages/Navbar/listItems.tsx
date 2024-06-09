import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ComputerIcon from "@mui/icons-material/Computer";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PostAdd from "@mui/icons-material/PostAdd";
import ToysIcon from "@mui/icons-material/Toys";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" style={{color: "white", backgroundColor: "#2E2E2E"}}>
      <h3>Přehled</h3>
    </ListSubheader>
    <Link to="/" style={{color: "white"}}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon style={{color: "white"}}/>
      </ListItemIcon>
      <ListItemText primary="Inzeráty" />
    </ListItemButton>
import DashboardIcon from "@mui/icons-material/Dashboard";
import Preview from "@mui/icons-material/Preview";
import PostAdd from "@mui/icons-material/PostAdd";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ComputerIcon from "@mui/icons-material/Computer";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HomeIcon from "@mui/icons-material/Home";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import ToysIcon from "@mui/icons-material/Toys";
import PetsIcon from "@mui/icons-material/Pets";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";


export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div">
      Inzeráty
    </ListSubheader>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Inzeráty" />
      </ListItemButton>
    </Link>

    <Link to="/createpost" style={{color: "white"}}>
      <ListItemButton>
        <ListItemIcon>
          <PostAdd style={{color: "white"}}/>
        </ListItemIcon>
        <ListItemText primary="Přidat inzerát" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <Preview />
      </ListItemIcon>
      <ListItemText primary="Moje inzeráty" />
    </ListItemButton>
  </React.Fragment>
);
export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" style={{color: "white", backgroundColor: "#2E2E2E"}}>
      <h3>Kategorie</h3>
    <ListSubheader component="div">
      Kategorie
    </ListSubheader>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <ComputerIcon style={{color: "white"}}/>
        <ComputerIcon />
      </ListItemIcon>

      <ListItemText primary="Elektronika" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <DirectionsCarIcon style={{color: "white"}}/>
        <DirectionsCarIcon />
      </ListItemIcon>
      <ListItemText primary="Vozidla" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <SportsEsportsIcon style={{color: "white"}}/>
        <SportsEsportsIcon />
      </ListItemIcon>
      <ListItemText primary="Gaming" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon style={{color: "white"}}/>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Domácnost" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <LocalPharmacyIcon style={{color: "white"}}/>
        <LocalPharmacyIcon />
      </ListItemIcon>
      <ListItemText primary="Drogérie" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <ToysIcon style={{color: "white"}}/>
        <ToysIcon />
      </ListItemIcon>
      <ListItemText primary="Hračky" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <PetsIcon style={{color: "white"}}/>
        <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="Zvířata" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <FastfoodIcon style={{color: "white"}}/>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary="Potraviny a nápoje" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <SportsSoccerIcon style={{color: "white"}}/>
        <SportsSoccerIcon />
      </ListItemIcon>
      <ListItemText primary="Sport" />
    </ListItemButton>

    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />
    <ListItemButton>
      <ListItemIcon>
        <MenuBookIcon style={{color: "white"}}/>
      </ListItemIcon>
      <ListItemText primary="Knihy" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} style={{border: "solid, #3F3F3F, 1px"}} />

        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Knihy" />
    </ListItemButton>
  </React.Fragment>
);
