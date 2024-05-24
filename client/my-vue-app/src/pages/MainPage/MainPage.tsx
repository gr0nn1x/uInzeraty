import { Link } from "react-router-dom";
import { getUploads } from "../../models/Post";
import { useEffect, useState } from "react";
import Article from "../../components/Product";
import * as React from "react";

export default function Home() {
  const [uploads, setUploads] = useState();
  const [isLoaded, setLoaded] = useState<any | null>(null);

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
        <h1>Home page</h1>
        <p>Images not found</p>
        <Link to={"/upload"}>
          <p>Upload new image</p>
        </Link>
      </>
    );
  }

  return (
    <>
      <h1>Home page</h1>
      {isLoaded ? (
        uploads.map((upload, index) => <Article key={index} {...upload} />)
      ) : (
        <p>Loading</p>
      )}
      <Link to={"/upload"}>
        <p>Upload new image</p>
      </Link>
    </>
  );
}
