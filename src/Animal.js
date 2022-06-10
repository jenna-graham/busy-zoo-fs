import React from 'react';

export default function Animal({ animal }) {
  return (
    <div className="animal">
      {animal === 'sloth' && '🦥'}
      {animal === 'peacock' && '🦚'}
      {animal === 'monkey' && '🦧'}
      {animal === 'tiger' && '🐅'}
      {animal === 'flamingo' && '🦩'}
    </div>
  );
}
