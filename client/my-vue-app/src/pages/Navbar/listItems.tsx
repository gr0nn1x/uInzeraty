import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Preview from '@mui/icons-material/Preview';
import PostAdd from '@mui/icons-material/PostAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ComputerIcon from '@mui/icons-material/Computer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import ToysIcon from '@mui/icons-material/Toys';
import PetsIcon from '@mui/icons-material/Pets';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Inzeráty" />
      </ListItemButton>
    </Link>

    <Link to="/createpost">
      <ListItemButton>
        <ListItemIcon>
          <PostAdd />
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
    <ListSubheader component="div" inset>
      Kategorie
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <ComputerIcon />
      </ListItemIcon>
      <ListItemText primary="Elektronika" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <DirectionsCarIcon />
      </ListItemIcon>
      <ListItemText primary="Vozidla" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <SportsEsportsIcon />
      </ListItemIcon>
      <ListItemText primary="Gaming" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Domácnost" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LocalPharmacyIcon />
      </ListItemIcon>
      <ListItemText primary="Drogérie" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <ToysIcon />
      </ListItemIcon>
      <ListItemText primary="Hračky" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <PetsIcon />
      </ListItemIcon>
      <ListItemText primary="Zvířata" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary="Potraviny a nápoje" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <SportsSoccerIcon />
      </ListItemIcon>
      <ListItemText primary="Sport" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Knihy" />
    </ListItemButton>
  </React.Fragment>
);
