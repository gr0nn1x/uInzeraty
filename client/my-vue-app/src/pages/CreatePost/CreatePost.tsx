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
      <Navbar title="Create Post" /> 
      <Container
        component="main"
        maxWidth="xs"
        sx={{ marginLeft: "240px", paddingLeft: "16px" }}
      >
        {" "}
        {/* Add paddingLeft */}
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            padding: 3,
            marginLeft: `${drawerWidth}px`,
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
                  fullWidth
                  id="postname"
                  label="Post Name"
                  autoFocus
                  onChange={handleChange}
                />

                <Typography variant="h6" style={{ color: "black" }}>Description</Typography>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />

                <Typography variant="h6" style={{ color: "black" }}>Contact Information</Typography>
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
              <Grid item>
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </Grid>
            </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
