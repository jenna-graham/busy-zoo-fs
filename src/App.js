import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign.js';
import AnimalList from './AnimalList.js';

function App() {

  const [tigerSize, setTigerSize] = useState(25);
  const [gorillaSize, setGorillaSize] = useState(25);
  const [jungleIsOpen, setJungleIsOpen] = useState(true);
  const [animals, setAnimals] = useState(['sloth']);
 
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
              <button onClick={() => setTigerSize(tigerSize + 5)}>Tiger eats the protein powder someone left behind!</button>
              <button onClick={() => setGorillaSize(gorillaSize - 4)}>Tiger fights Gorilla and deminishes his power.</button>
            </div> 
          </div>
          <div className="fighter">
            <img src="gorilla.png" style={{ width: `${gorillaSize * 6 }px` }}/>            
            <div className="animal-buttons">
              <button onClick={() => setGorillaSize(gorillaSize + 4)}>Gorilla finds mutagen canister that fell from space station!</button>
              <button onClick={() => setTigerSize(tigerSize - 5)}>Gorilla takes on Tiger, this could end bad!</button>
            </div>
          </div>
        </div>
        <button className="open-button" onClick={() => setJungleIsOpen(!jungleIsOpen)}>Should I enter?</button>
        <OpenClosedSign jungleIsOpen={jungleIsOpen} />
        
        <div>
          <p>Catch the daily parade, directed by Flash the Sloth</p>
        </div>
        <AnimalList animals={animals} />
        <div className="parade-buttons">
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
