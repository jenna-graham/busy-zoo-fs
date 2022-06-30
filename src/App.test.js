import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('the tiger will grow', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tiger eats the protein powder someone left behind!/i);
  expect(linkElement).toBeInTheDocument();
});

test('if the user clicks on the sloth button, there should be one more sloth on the screen', () => {
  render(<App />);
  const slothElementsAtLoad = screen.getAllByText(/🦥/i);

  expect(slothElementsAtLoad.length).toBe(1);

  const slothButton = screen.getByText(/Add sloth/i);

  fireEvent.click(slothButton);

  const slothElementsAfterClick = screen.getAllByText(/🦥/i);

  expect(slothElementsAfterClick.length).toBe(2);
});

test('if the user clicks on the tiger button, there should be one more tiger on the screen', () => {
  render(<App />);
  const emojisOnLoad = screen.getAllByText(/🦥|🦚|🦧|🐅|🦩/i);

  // initially there should be one poodle
  expect(emojisOnLoad.length).toBe(5);

  const tigerButton = screen.getByText(/Add tiger/i);

  fireEvent.click(tigerButton);
  fireEvent.click(tigerButton);
  fireEvent.click(tigerButton);
  fireEvent.click(tigerButton);
  

  const emojisAfterClick = screen.getAllByText(/🦥|🦚|🦧|🐅|🦩/i);

  expect(emojisAfterClick.length).toBe(9);
});
