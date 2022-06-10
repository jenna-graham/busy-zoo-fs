import React from 'react';
import useSound from 'use-sound';
import Lion from './tiger.mp3';

export default function Music() {
  const [play] = useSound(Lion);
    
  return (
    <div>
      <button onClick={play}>Start Fight</button>
    </div>
  );
}
