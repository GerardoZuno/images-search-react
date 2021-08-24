import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import ListImages from "./Components/ListImages";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([])
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)

  useEffect(() => {
    const apiPixebay = async () => {
      if (search === "") return;

      const imagesPerPage = 20;
      const URL = `https://pixabay.com/api/?key=23031099-d0b3f2b93f3eaf77f8fa3497e&q=${search}
      &per_page=${imagesPerPage}&page=${paginaActual}`;

      const response = await fetch(URL);
      const result = await response.json();
      setImages(result.hits)
      console.log(result)

     const totalPages = Math.ceil(result.totalHits / imagesPerPage )
     setTotalPaginas(totalPages)
    };

    const jumbotron = document.querySelector('.jumbotron')
    jumbotron.scrollIntoView({ behavior: 'smooth'})

    apiPixebay();
  }, [search, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual -1

     if(nuevaPaginaActual === 0) return
     setPaginaActual(nuevaPaginaActual)
     console.log(nuevaPaginaActual)
  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual +1

    if(nuevaPaginaActual === totalPaginas + 1) return
    setPaginaActual(nuevaPaginaActual)
    console.log(nuevaPaginaActual)

  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />

      {
        paginaActual === 1 ? null : 
        ( <button
          className="btn btn-info mr-1"
          onClick={paginaAnterior}>
            Anterior &laquo;
          </button> )
      }


      {
        paginaActual === totalPaginas ? null : 
        ( <button
          className="btn btn-info mr-1"
          onClick={paginaSiguiente}>
            Siguiente &raquo;
          </button>)
      }

      </div>       
    </div>
  );
}

export default App;
