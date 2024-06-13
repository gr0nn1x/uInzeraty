// Importujeme potřebné knihovny a komponenty z Reactu a Material-UI
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
import InputLabel from "@mui/material/InputLabel"; 
import MenuItem from "@mui/material/MenuItem"; 
import FormControl from "@mui/material/FormControl"; 
import Select, { SelectChangeEvent } from "@mui/material/Select"; 
import Navbar from "../Navbar/Navbar"; 

// Definujeme výchozí exportovanou funkční komponentu CreatePost
export default function CreatePost() {
  // Definujeme stav pro informační zprávy
  const [info, setInfo] = useState(); 

  // Definujeme stav pro data z formuláře
  const [formData, setFormData] = useState({}); 

  // Používáme hook useNavigate pro navigaci mezi stránkami
  const navigate = useNavigate(); 

  // Vytvoříme ref pro input s typem file (pro nahrání obrázku)
  const imgRef = useRef<HTMLInputElement>(null); 

  // Funkce pro odeslání formuláře
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Zabráníme výchozímu chování formuláře

    // Vytvoříme FormData objekt pro odeslání dat
    const formDataToSend = new FormData(); 
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value); 
    }
    if (imgRef.current && imgRef.current.files.length > 0) {
      formDataToSend.append("photo", imgRef.current.files[0]); 
    }
    console.log(...formDataToSend);

    // Voláme funkci createPost pro vytvoření inzerátu
    const post = await createPost(formDataToSend); 

    // Zpracujeme odpověď na základě statusu
    if (post.status === 201) return navigate("/"); 
    if (post.status === 400) return setInfo(post.msg); 
    if (post.status === 500) return navigate("/"); 
  };

  // Funkce pro změnu hodnot ve formuláři
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  // Vytvoříme výchozí téma pro Material-UI
  const defaultTheme = createTheme(); 

  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Komponenta Navbar pro navigační lištu */}
        <Navbar currentPage="createPost" /> 
        <Container component="main" maxWidth="xs" sx={{ marginLeft: "750px" }}>
          {/* Komponenta CssBaseline pro nastavení základního CSS */}
          <CssBaseline /> 
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Formulář pro vytvoření inzerátu */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, width: "100%" }}
            >
              <Grid container spacing={2}>
                {/* Pole pro název inzerátu */}
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="postname"
                    required
                    fullWidth
                    id="postname"
                    label="Název"
                    autoFocus
                    onChange={handleChange}
                    inputProps={{ maxLength: 56 }}
                  />
                </Grid>
                {/* Pole pro popis inzerátu */}
                <Grid item xs={12}>
                  <textarea
                    style={{
                      width: "100%",
                      height: "200px",
                      padding: "0",
                      border: "none",
                      outline: "none",
                      resize: "none",
                      fontSize: "1rem",
                      backgroundColor: "white",
                      color: "black",
                      border: "solid 1px black",
                    }}
                    placeholder="Popis"
                    id="description"
                    name="description"
                    autoComplete="description"
                    onChange={handleChange}
                  />
                </Grid>
                {/* Pole pro heslo */}
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
              {/* Výběr kategorie */}
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="category">Kategorie</InputLabel>
                  <Select
                    name="category"
                    labelId="category"
                    id="category"
                    value={formData.category || ""}
                    onChange={handleChange}
                    label="kategorie"
                  >
                    <MenuItem value="">
                      <em>Žádná</em>
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
              {/* Pole pro nahrání obrázku */}
              <Grid container justifyContent="right">
                <Grid item>
                  <input ref={imgRef} type="file" name="photo" id="photo" />
                </Grid>
              </Grid>
              {/* Tlačítko pro odeslání formuláře */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Vytvořit inzerát
              </Button>
              {/* Zobrazení informační zprávy */}
              <p>{info}</p>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
