import * as React from "react";
import { getUploads } from "../../models/Post";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const [uploads, setUploads] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const load = async () => {
    const data = await getUploads();
    if (data.status === 200) {
      setUploads(data.payload);
      setLoaded(true);
    } else {
      setLoaded(null);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredUploads = selectedCategory
    ? uploads.filter((upload) => upload.category === selectedCategory)
    : uploads;

  if (isLoaded === null) {
    return (
      <>
        <Navbar currentPage="main" />
        <Container component="main" sx={{ marginLeft: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
            }}
          >
            <p>Nebyly nalezeny žádné inzeráty. Co takhle jeden vytvořit?</p>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <Navbar currentPage="main" onCategorySelect={handleCategorySelect} />
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
            {filteredUploads.length === 0 ? (
              <p
                style={{
                  textAlign: "center",
                  color: "black",
                }}
              >
                V této kategorii nejsou žádné inzeráty.
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
                {filteredUploads.map((upload, index) => (
                  <Box
                    key={index}
                    sx={{
                      margin: "1rem",
                      maxWidth: "400px",
                      maxHeight: "1000px",
                    }}
                  >
                    <Product {...upload} />
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
