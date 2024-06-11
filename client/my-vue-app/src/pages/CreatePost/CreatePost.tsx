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
    formDataToSend.append("photo", imgRef.current.files[0]);
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
      <Navbar title="Create Post" /> {/* Add Navbar component */}
      <Container component="main" sx={{ marginLeft: '25%' }}> {/* Add paddingLeft */}
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
            <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
            }}
            >
            <Box>
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
            </Box>
            </Box>

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
            <Grid container xs={"auto"}>
              <TextField
                required
                fullWidth
                name="desc"                     // předělat
                label="Popis"
                type="desc"                     // předělat
                id="desc"                       // předělat
              />
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

// stará verze
/*
import React, { useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../models/Post";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";
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
      <Navbar title="Create Post"/>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ marginLeft: "800px", paddingLeft: "16px" }}
      >
        {" "}
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
                  label="Password"
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

              <Grid item></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Post
            </Button>
            <p>{info}</p>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
*/