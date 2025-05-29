import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('ItemList displays "Banana"', () => {
  render(<ItemList />);
  const item = screen.getByText('Banana');
  expect(item).toBeInTheDocument();
});