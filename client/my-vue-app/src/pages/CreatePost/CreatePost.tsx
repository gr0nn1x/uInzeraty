import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../models/Post";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from '../Navbar/Navbar'; // Import the Navbar component

export default function CreatePost() {
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const post = await createPost({
      postname: data.get("postname") as string,
      email: data.get("email") as string,
      password: data.get("password") as string,
      photo: data.get("photo") as string,
    });

    if (post.status === 201) return navigate("/");
    if (post.status === 400) return setInfo(post.msg);
    if (post.status === 500) return navigate("/");
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar title="Create Post" /> {/* Add Navbar component */}
      <Container component="main" sx={{ marginLeft: '250px' }}> {/* Add paddingLeft */}
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Nový inzerát
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: '100%' }} // Adjust width to 100%
          >
              <Grid container justifyContent="center"> {/* Center the grid container */}
                <Grid item> {/* Wrap the file input and upload button in a Grid item */}
                  <TextField type="file" name="photo" id="photo"/>
                </Grid>
              </Grid>
            <Grid container>
              <Grid xs justifyContent="center"> {/* Center the grid container */}
                <Grid item> {/* Wrap the file input and upload button in a Grid item */}
                  <TextField type="file" name="photo" id="photo" />
                </Grid>
              </Grid>
              <Grid xs justifyContent="center"> {/* Center the grid container */}
                <Grid item> {/* Wrap the file input and upload button in a Grid item */}
                  <TextField type="file" name="photo" id="photo" />
                </Grid>
              </Grid>
              <Grid xs justifyContent="center"> {/* Center the grid container */}
                <Grid item> {/* Wrap the file input and upload button in a Grid item */}
                  <TextField type="file" name="photo" id="photo" />
                </Grid>
              </Grid>
              <Grid xs justifyContent="center"> {/* Center the grid container */}
                <Grid item> {/* Wrap the file input and upload button in a Grid item */}
                  <TextField type="file" name="photo" id="photo" />
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="name"                     // předělat
                  label="Jméno"
                  type="name"                     // předělat
                  id="name"                       // předělat
                  autoComplete="given-name"       // předělat
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"                   // předělat
                  label="Telefon"
                  type="phone"                   // předělat
                  id="phone"                     // předělat
                  autoComplete="given-phone"     // předělat
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"                   // předělat
                  label="Adresa"
                  type="address"                   // předělat
                  id="address"                     // předělat
                  autoComplete="given-address"     // předělat
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"                   // předělat
                  label="Cena"
                  type="price"                   // předělat
                  id="price"                     // předělat
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zaslat inzerát
            </Button>
            <p>{info}</p>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}