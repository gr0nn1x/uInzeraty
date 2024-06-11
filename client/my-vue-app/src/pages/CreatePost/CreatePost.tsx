import React, { useRef, useState } from "react";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Navbar from "../Navbar/Navbar";
import { Avatar } from "@mui/material";

export default function CreatePost() {
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const imgRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    if (imgRef.current && imgRef.current.files.length > 0) {
      formDataToSend.append("photo", imgRef.current.files[0]);
    }
    console.log(...formDataToSend);
    const post = await createPost(formDataToSend);
    if (post.status === 201) return navigate("/");
    if (post.status === 400) return setInfo(post.msg);
    if (post.status === 500) return navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ display: "flex" }}>
        <Navbar currentPage="createPost"/>
        <Container component="main" maxWidth="xs" sx={{ marginLeft: "500px" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Post
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "100%" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="postname"
                    required
                    fullWidth
                    id="postname"
                    label="název inzerátu"
                    autoFocus
                    onChange={handleChange}
                    inputProps={{ maxLength: 56 }} // Limit the input to 56 characters
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="category">kategorie</InputLabel>
                    <Select
                      name="category"
                      labelId="category"
                      id="category"
                      value={formData.category || ""}
                      onChange={handleChange}
                      label="kategorie"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Elektronika">Elektronika</MenuItem>
                      <MenuItem value="Vozidla">Vozidla</MenuItem>
                      <MenuItem value="Gaming">Gaming</MenuItem>
                      <MenuItem value="Domácnost">Domácnost</MenuItem>
                      <MenuItem value="Drogérie">Drogérie</MenuItem>
                      <MenuItem value="Hračky">Hračky</MenuItem>
                      <MenuItem value="Zvířata">Zvířata</MenuItem>
                      <MenuItem value="Sport">Sport</MenuItem>
                      <MenuItem value="Knihy">Knihy</MenuItem>
                      <MenuItem value="Historické">Historické</MenuItem>
                      <MenuItem value="Zahrada">Zahrada</MenuItem>
                      <MenuItem value="Oblečení a obuv">Oblečení a obuv</MenuItem>
                      <MenuItem value="Nářadí">Nářadí</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="description"
                    label="popis"
                    name="description"
                    autoComplete="description"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Heslo"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item>
                  <input ref={imgRef} type="file" name="photo" id="photo" />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Posts
              </Button>
              <p>{info}</p>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}