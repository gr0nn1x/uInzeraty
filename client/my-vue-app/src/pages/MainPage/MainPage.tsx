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
      <Container component="main" sx={{ marginLeft: "500px" }}>
        <Navbar currentPage="main" />
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
    );
  }

  return (
    <>
      <Container component="main">
        <Navbar currentPage="main" onCategorySelect={handleCategorySelect} />
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
                marginLeft: "600px",
              }}
            >
              V této kategorii nejsou žádné inzeráty.
            </p>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                padding: "1rem",
              }}
            >
              {filteredUploads.map((upload, index) => (
                <Box
                  key={index}
                  sx={{
                    marginLeft: "auto",
                    marginBottom: "1rem",
                  }}
                >
                  <Product
                    {...upload}
                    sx={{
                      paddingLeft: "0",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}
