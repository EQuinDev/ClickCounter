import React from "react";
import '../hojas-de-estilo/botones.css';

function Boton({ texto, esBotonDeClick, manejarClick }){
  return (
    <button
      className={ esBotonDeClick ? 'boton-clik' : 'boton-reiniciar' }
      onClick={manejarClick}>  
      {texto}
    </button>
  );
}

export default Boton;