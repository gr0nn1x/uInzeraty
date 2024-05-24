import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const drawerWidth = 240; // This should match the width used in Navbar

export default function CreatePost() {
  const defaultTheme = createTheme();
  const [images, setImages] = useState<File[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files));
      setCurrentImageIndex(0); // Show the first image by default
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <Navbar title="Create Post" />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            padding: 3,
            marginLeft: `${drawerWidth}px`,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                startIcon={<ImageIcon />}
              >
                Upload Images
                <input
                  type="file"
                  hidden
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Button>
              <Box sx={{ mt: 2 }}>
                {images.length > 0 && (
                  <>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={URL.createObjectURL(images[currentImageIndex])}
                        alt={`Preview ${currentImageIndex + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxHeight: 300,
                        }}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", mt: 1 }}
                    >
                      <Button
                        variant="contained"
                        onClick={handlePrevImage}
                        startIcon={<ArrowBackIcon />}
                        sx={{ mr: 1 }}
                      >
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleNextImage}
                        endIcon={<ArrowForwardIcon />}
                      >
                        Next
                      </Button>
                    </Box>
                    <Box
                      sx={{ display: "flex", mt: 2, overflowX: "auto", gap: 1 }}
                    >
                      {images.map((image, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          style={{
                            width: 60,
                            height: 60,
                            objectFit: "cover",
                            border:
                              currentImageIndex === index
                                ? "2px solid blue"
                                : "none",
                            cursor: "pointer",
                          }}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </Box>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Typography variant="h6">Product Name</Typography>
                <TextField fullWidth variant="outlined" margin="normal" />

                <Typography variant="h6">Specifications</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  placeholder="16GB RAM, 128GB Disk Space, etc."
                />

                <Typography variant="h6">Description</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                />

                <Typography variant="h6">Contact Information</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  placeholder="Your Name"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  placeholder="Address"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  placeholder="Price"
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  type="password"
                  placeholder="Password"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
