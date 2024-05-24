import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from '../Navbar/Navbar'; // Import the Navbar component

export default function MyPosts() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar title="My Posts" /> {/* Add Navbar component */}
      <Container component="main" maxWidth="lg" sx={{ marginLeft: '240px', paddingLeft: '16px' }}> {/* Adjust container settings */}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            My Posts
          </Typography>
          {/* Content for My Posts page can be added here */}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
