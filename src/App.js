import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import LogoClickCounter from './fotos/logo.png'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);
  
 
  const manejarClick = () => {
    setNumClicks(numClicks+1);
  };


  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-plataforma-contenedor'>
        <img className='logo-plataforma'
        src={LogoClickCounter}
        alt='Logo de la plataforma'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />

       <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />

        <Boton 
          texto='Restart'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>  

      <div class="marco">
        <p>Desarrollado por EQuinDev</p>
      </div>
    </div>
  );
}

export default App;
