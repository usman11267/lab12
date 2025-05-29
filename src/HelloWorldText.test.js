import { render, screen } from '@testing-library/react';
import HelloWorldText from './HelloWorldText';

test('HelloWorldText displays "Hello world"', () => {
  render(<HelloWorldText />);
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('Hello world');
});