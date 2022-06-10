import React from 'react';
import Animal from './Animal.js';

export default function AnimalList({ animals }) {
  return (
    <div className="cricle-wrapper">
      <div className="parade">
        {
          animals.map((animal, i) => <Animal animal={animal} key={animal = i} />)
        }
      </div>

    </div>
    
  );
}
