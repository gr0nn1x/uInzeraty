import * as React from "react"; // Importuje základní knihovnu React
import { getUploads } from "../../models/Post"; // Importuje funkci getUploads z modelu Post
import { useEffect, useState } from "react"; // Importuje React hooky useEffect a useState
import Product from "../../components/Product"; // Importuje komponentu Product
import Container from "@mui/material/Container"; // Importuje komponentu Container z Material-UI
import Box from "@mui/material/Box"; // Importuje komponentu Box z Material-UI
import Navbar from "../Navbar/Navbar"; // Importuje komponentu Navbar

export default function Home() {
  const [uploads, setUploads] = useState([]); // Definuje stav uploads, který bude obsahovat seznam nahraných inzerátů
  const [isLoaded, setLoaded] = useState(false); // Definuje stav isLoaded, který určuje, zda byla data úspěšně načtena
  const [selectedCategory, setSelectedCategory] = useState(""); // Definuje stav selectedCategory, který bude obsahovat aktuálně vybranou kategorii

  // Funkce pro načtení nahraných inzerátů
  const load = async () => {
    const data = await getUploads(); // Asynchronně získává data pomocí funkce getUploads
    if (data.status === 200) { // Pokud je status odpovědi 200 (OK)
      setUploads(data.payload); // Nastaví data do stavu uploads
      setLoaded(true); // Nastaví stav isLoaded na true
    } else {
      setLoaded(null); // Pokud je status odpovědi jiný než 200, nastaví stav isLoaded na null
    }
  };

  // Použití hooku useEffect pro načtení dat při prvním renderování komponenty
  useEffect(() => {
    load(); // Volá funkci load pro načtení dat
  }, []); // Prázdné pole závislostí znamená, že se effect spustí pouze jednou

  // Funkce pro nastavení vybrané kategorie
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Nastaví vybranou kategorii do stavu selectedCategory
  };

  // Filtruje nahrané inzeráty podle vybrané kategorie
  const filteredUploads = selectedCategory
    ? uploads.filter((upload) => upload.category === selectedCategory) // Pokud je vybrána kategorie, filtruje nahrávky podle této kategorie
    : uploads; // Pokud není vybrána žádná kategorie, vrátí všechny nahrávky

  // Pokud se data nepodařilo načíst
  if (isLoaded === null) {
    return (
      <>
        <Navbar currentPage="main" /> {/* Zobrazí navigační lištu */}
        <Container component="main" sx={{ marginLeft: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <p>Nebyly nalezeny žádné inzeráty. Co takhle jeden vytvořit?</p> {/* Zpráva, pokud nebyly nalezeny žádné inzeráty */}
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <Navbar currentPage="main" onCategorySelect={handleCategorySelect} /> {/* Zobrazí navigační lištu s funkcí pro výběr kategorie */}
        <Container
          style={{
            flexGrow: 1, 
            padding: "16px",
            maxWidth: "100%",
            marginLeft: "250px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {filteredUploads.length === 0 ? ( // Pokud nejsou žádné inzeráty ve vybrané kategorii
              <p
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                V této kategorii nejsou žádné inzeráty. {/* Zpráva, pokud nejsou žádné inzeráty ve vybrané kategorii */}
              </p>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {filteredUploads.map((upload, index) => ( // Prochází seznam nahraných inzerátů a renderuje komponenty Product
                  <Box
                    key={index}
                    sx={{
                      margin: "1rem",
                      maxWidth: "400px",
                      maxHeight: "1000px",
                    }}
                  >
                    <Product {...upload} /> {/* Renderuje komponentu Product pro každý inzerát */}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </div>
    </>
  );
}
