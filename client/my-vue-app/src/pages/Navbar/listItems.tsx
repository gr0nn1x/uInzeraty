import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Preview from '@mui/icons-material/Preview';
import PostAdd from '@mui/icons-material/PostAdd';
import AssignmentIcon from '@mui/icons-material/Assignment';
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
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Přeprava" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Nábytek" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Předměty" />
    </ListItemButton>

  </React.Fragment>
);
