import React from "react";
//esta es la clase del componente carateres resibe por parametro la lista de caracateres que va a representar
export default function DataContact(enterprice) {
  const enterpriceObjet  = enterprice;
  
  console.log(enterpriceObjet.enterprice);

  //esta clase lo que hace es retoenar el html del componente
  return (
    //se retorna directamente el html como si fuera un objeto implicito
    <footer>
        <div>
            <h1>
                <strong>
                    Serie de la empresa: <span>{enterpriceObjet.enterprice.name}</span>
                </strong> 
            </h1>
            <p>
                <strong>
                    Todos los derechos reservados |
                </strong>
                <span>
                    {enterpriceObjet.enterprice.matris}
                </span>
            </p>
        </div>
    </footer>
  );
}
