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
import Navbar from "../Navbar/Navbar";
import "./CreatePost.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function CreatePost() {
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const imgRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    SelectChangeEvent
  ) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    formDataToSend.append("photo", imgRef.current.files[0]);
    console.log(...formDataToSend);
    const post = await createPost(formDataToSend);
    if (post.status === 201) return navigate("/");
    if (post.status === 400) return setInfo(post.msg);
    if (post.status === 500) return navigate("/");
  };

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            sx={{ mt: 3, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="postname"
                  label="Post Name"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="category">kategorie</InputLabel>
                <Select
                  name="category"
                  labelId="category"
                  id="category"
                  value={FormData.category}
                  onChange={handleChange}
                  label="category"
                >
                  <MenuItem value="undefined">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"monitor"}>Monitor</MenuItem>
                  <MenuItem value={"notebook"}>Notebook</MenuItem>
                  <MenuItem value={"telefon"}>Telefon</MenuItem>
                  <MenuItem value={"klavesnice"}>Klávesnice</MenuItem>
                  <MenuItem value={"mys"}>Myš</MenuItem>
                  <MenuItem value={"sluchatka"}>Sluchátka</MenuItem>
                </Select>
              </FormControl>
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
            <Grid container justifyContent="center">
              <Grid item>
                <input ref={imgRef} type="file" name="photo" id="photo" />
              </Grid>

              <Grid item></Grid>
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