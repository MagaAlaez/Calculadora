import React, { useState, useCallback } from 'react';
import logo from './mates.png';
import './App.css';
import { Multiplicacion } from './Utils';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [total, setTotal] = useState(0);

  const calcularResultado = useCallback(() => {
    setTotal(Multiplicacion(numA, numB));
  }, [numA, numB]);

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
        Proyecto de INGENIERIA DE SOFTWARE - Alaez, Magali Sol <br /><br /><br />
        </p>
        <div>
          <label class="cajaletras">Multiplicando: </label>
          <input
            value={numA}
            class="caja"
            /*style={{fontSize: 24, width: 100, textAlign: 'center'}}*/
            onChange={(e) => setNumA(+e.target.value)}
          />
        </div>
        <div>
          <label class="cajaletras">Multiplicador: </label>
          <input
            value={numB}
            class="caja"
            /*style={{fontSize: 24, width: 100, textAlign: 'center'}}*/
            onChange={(e) => setNumB(+e.target.value)}
          />
        </div>
        <div>
          <button class="cajita"
            
            onClick={calcularResultado}
          >
            Multiplicar
          </button>
        </div>
        <div>
          <label class="cajaletras">Resultado: </label>
          <input
            value={total}
            class="caja"
            /*style={{fontSize: 24, width: 100, textAlign: 'center', backgroundColor: 'white'}}*/
            disabled
            readOnly
          />
        </div>
      </header>
    </div>
  );
}

export default App;
