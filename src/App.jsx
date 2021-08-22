import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import ListImages from "./Components/ListImages";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([])

  useEffect(() => {
    const apiPixebay = async () => {
      if (search === "") return;

      const imagesPerPage = 20;
      const URL = `https://pixabay.com/api/?key=23031099-d0b3f2b93f3eaf77f8fa3497e&q=${search}&per_page=${imagesPerPage}`;

      const response = await fetch(URL);
      const result = await response.json();
      setImages(result.hits)
    };

    apiPixebay();
  }, [search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />
      </div>
    </div>
  );
}

export default App;
