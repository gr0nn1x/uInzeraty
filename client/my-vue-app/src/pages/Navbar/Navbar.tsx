import React from 'react';
import { AppBar, Toolbar, Button, List, ListItem, ListItemText, ListItemButton, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
          <div>
            <Button color="inherit" sx={{ bgcolor: '#757575' }}><AddBoxIcon/></Button>
            <Button color="inherit" sx={{ bgcolor: '#757575' }}><AccountCircleIcon/></Button>
          </div>
          <List>
            <ListItemButton color="inherit" sx={{ bgcolor: '#757575' }}>
           <Link to="/createpost">   <ListItemText primary="Create Post" /></Link>
            </ListItemButton>
            <ListItemButton color="inherit" sx={{ bgcolor: '#757575' }}>
              <ListItemText primary="Button 4" />
            </ListItemButton>
            <ListItemButton color="inherit" sx={{ bgcolor: '#757575' }}>
              <ListItemText primary="Button 5" />
            </ListItemButton>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
