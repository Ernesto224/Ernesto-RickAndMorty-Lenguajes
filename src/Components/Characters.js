import React from "react";
//esta es la clase del componente carateres resibe por parametro la lista de caracateres que va a representar
export default function Characters(props) {
  const { characters, setCharacters } = props;

  //con esta linea se resetea este componente por completo
  const resetCharacters = () => {
    setCharacters(null);
  };

  console.log(characters);

  //esta clase lo que hace es retoenar el html del componente
  return (
    //se retorna directamente el html como si fuera un objeto implicito
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Volver a la home
      </span>
      <div className="container-characters">
        {characters.map((character, index) => (//este metodo funciona como un ciclo iterativo (forech) que toma el caracter y el indice de la lista (del objeto caracter se toma la informacion y el indice es un identificador del componente dinamico)
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (//esta sentencia representa un simple if
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (//else se representa este if mediante lengua de signos y se usa <> para delimitar la apertura de codigo html
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Volver a la pagina principal
      </span>
    </div>
  );
}
