import React from 'react';

export default function OpenClosedSign({ jungleIsOpen }) {
  return (
    <div className={jungleIsOpen ? 'open' : 'closed'}>
      {
        jungleIsOpen
          ? <h3>🌿Yaay! The jungle is safe, Come on in!</h3>
          : <h3>Eek! The jungle is not Safe right now, <br></br> ☠️Enter at your Own Risk!☠️</h3>
      }
    </div> 
  );
}
