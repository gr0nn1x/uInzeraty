import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
 
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
 
export default function MainPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar/> {/* Use the Navbar component */}
      </Box>
    </ThemeProvider>
  );
}