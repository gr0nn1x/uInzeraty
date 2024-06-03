import * as React from "react";
import { Link } from "react-router-dom";
import { getUploads } from "../../models/Post";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Navbar from "../Navbar/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Home() {
  const [uploads, setUploads] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getUploads();
    console.log(data);
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

  if (isLoaded === null) {
    return (
      <>
        <Navbar title="Create Post" />
        <Container
          component="main"
          sx={{ marginLeft: "100%" }}
        >
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          >
            <h1>Home page</h1>
            <p>Images not found</p>
            <Link to={"/createpost"}>
            <p style={{ marginLeft: "300px", paddingLeft: "16px" }}>
              Upload new image
            </p>
          </Link>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar title="Create Post" />
      <Container
        component="main"
        sx={{ marginLeft: "100%" }}
      >
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        >
          <h1>Home page</h1>
          {isLoaded ? (
            uploads.map((upload, index) => <Product key={index} {...upload} />)
          ) : (
                <p>Loading</p>
              )}
          <Link to={"/createpost"}>
            <p style={{ }}>
              Upload new image
            </p>
          </Link>
        </Box>
      </Container>
    </>
  );
}
