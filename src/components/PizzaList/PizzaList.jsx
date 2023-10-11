import React from 'react';
import Pizza from '../Pizza/Pizza';

const PizzaList = ({ pizzaList }) => {
  return (
    <>
      {pizzaList.map((pizza) => (
        <Pizza
          key={pizza.id}
          {...pizza}
        />
      ))}
    </>
  );
};

export default PizzaList;
