import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign.js';
import AnimalList from './AnimalList.js';

function App() {

  const [tigerSize, setTigerSize] = useState(25);
  const [gorillaSize, setGorillaSize] = useState(25);
  const [jungleIsOpen, setJungleIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['sloth', 'peacock', 'monkey', 'tiger', 'flamingo']);
 
  function handleSlothClick() {
    animals.push('sloth');
    setAnimals(animals.slice());
  }
  function handlePeacockClick() {
    animals.push('peacock');
    setAnimals(animals.slice());
  }
  function handleMonkeyClick() {
    animals.push('monkey');
    setAnimals(animals.slice());
  }
  function handleTigerClick() {
    animals.push('tiger');
    setAnimals(animals.slice());
  }
  function handleFlamingoClick() {
    animals.push('flamingo');
    setAnimals(animals.slice());
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="fight">
          <div className="fighter">
            <img src="tiger.png" style={{ width: `${tigerSize * 5 }px` }}/>
            <div className="animal-buttons">
              <button onClick={() => setTigerSize(tigerSize + 10)}>Tiger drinks the protein powder someone left behind!</button>
              <button onClick={() => setGorillaSize(gorillaSize - 10)}>Tiger fights Gorilla and deminishes his power.</button>
            </div> 
          </div>
          <div className="fighter">
            <img src="gorilla.png" style={{ width: `${gorillaSize * 7 }px` }}/>            
            <div className="animal-buttons">
              <button onClick={() => setGorillaSize(gorillaSize + 10)}>Gorilla finds mutagen canister that fell from space station!</button>
              <button onClick={() => setTigerSize(tigerSize - 10)}>Gorilla takes on Tiger, this could end bad!</button>
            </div>
          </div>
        </div>
        <OpenClosedSign jungleIsOpen={jungleIsOpen} />
        <button onClick={() => setJungleIsOpen(!jungleIsOpen)}>Should I enter?</button>
        <div>
          <p>Catch the daily parade, directed by Flash the Sloth</p>
        </div>
        <AnimalList animals={animals} />
        <div className="buttons">
          <button onClick={handleSlothClick}>Add sloth</button>
          <button onClick={handlePeacockClick}>Add peacock</button>
          <button onClick={handleMonkeyClick}>Add monkey</button>
          <button onClick={handleTigerClick}>Add tiger</button>
          <button onClick={handleFlamingoClick}>Add flamingo</button>
        </div>
        
      </header>

    </div>
  


  );

}

export default App;
