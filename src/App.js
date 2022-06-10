import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign.js';

function App() {

  const [tigerSize, setTigerSize] = useState(25);
  const [gorillaSize, setGorillaSize] = useState(25);
  const [jungleIsOpen, setJungleIsOpen] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <div className="fight">
          <div className="fighter">
            <img src="tiger.png" style={{ width: `${tigerSize * 2 }px` }}/>
            <div className="animal-buttons">
              <button onClick={() => setTigerSize(tigerSize + 10)}>Tiger is Growing!</button>
              <button onClick={() => setGorillaSize(gorillaSize - 10)}>Gorilla is Shrinking</button>
            </div> 
          </div>
          <div className="fighter">
            <img src="gorilla.png" style={{ width: `${gorillaSize * 3 }px` }}/>            
            <div className="animal-buttons">
              <button onClick={() => setGorillaSize(gorillaSize + 10)}>Gorilla is growing!</button>
              <button onClick={() => setTigerSize(tigerSize - 10)}>Tiger is shrinking</button>
            </div>
          </div>
        </div>
        <OpenClosedSign jungleIsOpen={jungleIsOpen} />
        <button onClick={() => setJungleIsOpen(!jungleIsOpen)}>Should I enter?</button>
      </header>

    </div>
  


  );

}

export default App;
