import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButtons({ 
  onClick, 
  children,
  variant = 'outlined',
  margin = '10px',
  buttonColor = 'rgba(240, 248, 255, 0.583)',
  border }) {
  return (
    <Button 
      className="add-button"
      variant={variant}
      onClick={onClick}
      color="success"
      sx={{
        margin: margin,
        border: border,
        background: buttonColor 
      }}
    >
      {children}
    </Button>
  );
}
