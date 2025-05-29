import React from 'react';

function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default ItemList;