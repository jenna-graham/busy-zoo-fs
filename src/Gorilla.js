import React from 'react';
import useSound from 'use-sound';
import Gorilla from './Gorilla.wav';

export default function MusicGorilla() {
  const [play] = useSound(Gorilla);
    
  return (
    <div>
      <button onClick={play}>Start Fight</button>
    </div>
  );
}