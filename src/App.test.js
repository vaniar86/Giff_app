import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders whithout crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Última busqueda/i);
  expect(linkElement).toBeInTheDocument();
});

test('search from could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'matrix' }})
  fireEvent.click(button)
  screen.debug()

  const title = await screen.findByText('matrix')
  expect(title).toBeVisible()
})
