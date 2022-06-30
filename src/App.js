import { useState } from 'react';
import './App.css';
import OpenClosedSign from './OpenClosedSign.js';
import AnimalList from './AnimalList.js';
import MusicTiger from './Tiger.js';
import MusicGorilla from './Gorilla.js';
import CustomButtons from './CustomButtons';

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
            <img src="tiger.png" style={{ width: `${tigerSize * 5}px` }} />
            <div className="animal-buttons">
              <MusicTiger />
              <button onClick={() => setTigerSize(tigerSize + 5)}>
                Tiger eats the protein powder someone left behind!
              </button>
              <button onClick={() => setGorillaSize(gorillaSize - 4)}>
                Tiger fights Gorilla and deminishes his power.
              </button>
            </div>
          </div>
          <div className="fighter">
            <img src="gorilla.png" style={{ width: `${gorillaSize * 6}px` }} />
            <div className="animal-buttons">
              <MusicGorilla />
              <button onClick={() => setGorillaSize(gorillaSize + 4)}>
                Gorilla finds mutagen canister that fell from space station!
              </button>
              <button onClick={() => setTigerSize(tigerSize - 5)}>
                Gorilla takes on Tiger, this could end bad!
              </button>
            </div>
          </div>
        </div>
        
        <OpenClosedSign jungleIsOpen={jungleIsOpen} />
        <CustomButtons onClick={() => setJungleIsOpen(!jungleIsOpen)}>
          Should I enter?
        </CustomButtons>

        <div>
          <p>Catch the daily parade, directed by Flash the Sloth</p>
        </div>
        <AnimalList animals={animals} />
        <div className="parade-buttons">
          <CustomButtons onClick={handleSlothClick}>Add sloth</CustomButtons>
          <CustomButtons onClick={handlePeacockClick}>Add peacock</CustomButtons>
          <CustomButtons onClick={handleMonkeyClick}>Add monkey</CustomButtons>
          <CustomButtons onClick={handleTigerClick}>Add tiger</CustomButtons>
          <CustomButtons onClick={handleFlamingoClick}>Add flamingo</CustomButtons>
        </div>
      </header>
    </div>
  );
}

export default App;
