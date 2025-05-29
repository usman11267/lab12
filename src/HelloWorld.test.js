import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders HelloWorld component', () => {
  render(<HelloWorld />);
  const heading = screen.getByRole('heading', { name: /hello world/i });
  expect(heading).toBeInTheDocument();
});