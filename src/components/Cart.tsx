import React from 'react';
import { useSelector } from 'react-redux';

export const Cart: React.FC = () => {
  const state = useSelector(state => state);

  // console.log(state);
  
  return (
    <main>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </main>
  );
};