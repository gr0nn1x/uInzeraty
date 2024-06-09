import * as React from "react";
import { Link } from "react-router-dom";
import { getUploads } from "../../models/Post";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Navbar from "../Navbar/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function Home() {
  const [uploads, setUploads] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const load = async () => {
    const data = await getUploads();
    console.log(data);
    if (data.status === 200) {
      setUploads(data.payload);
      setLoaded(true);
      const uniqueCategories = [...new Set(data.payload.map(post => post.category))];
      setCategories(uniqueCategories);
    } else {
      setLoaded(null);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredUploads = selectedCategory
    ? uploads.filter(upload => upload.category === selectedCategory)
    : uploads;

  if (isLoaded === null) {
    return (
      <>
        <Navbar title="Create Post" />
        <Container component="main" sx={{ marginLeft: "100%" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Home page</h1>
            <p>Images not found</p>
            <Link to="/createpost">
              <p>Upload new image</p>
            </Link>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar title="Create Post" />
      <Container component="main">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1>Home page</h1>
          <FormControl sx={{ minWidth: 120, marginBottom: 2,marginLeft:"80%" }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2 }}>
            {isLoaded ? (
              filteredUploads.map((upload, index) => (
                <Box key={index} sx={{ flex: "1 0 21%", margin: "1%" }}>
                  <Product {...upload} />
                </Box>
              ))
            ) : (
              <p>Loading</p>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
