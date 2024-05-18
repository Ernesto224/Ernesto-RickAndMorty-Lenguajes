import imageRickMorty from "./img/rick-morty.png";

import "./App.css";
import { useState } from "react";
import Characters from "./Components/Characters";
import Footer from "./Components/Footer"

function App() {
  const [characters, setCharacters] = useState(null);//se crea una instancia del nuevo componente
  const enterprice = {name:'Adult Swin', matris:'ErnestoVegaC08380'};

  const reqApi = async () => {//se hace una solicitud normal a la api
    const api = await fetch("https://rickandmortyapi.com/api/character");

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);//se le hace set al componente de los resultados optenidos
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty </h1>
        {characters ? (//verifica que el componente no sea null antes de dibujarlo, para mas de 2 componentes se requieren <>
          <>
            <Characters characters={characters} setCharacters={setCharacters} />
          </>
          
        ) : (//en caso de ser null retorna la vista base
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
        <Footer enterprice={enterprice}/>
      </header>
    </div>
  );
}

export default App;
