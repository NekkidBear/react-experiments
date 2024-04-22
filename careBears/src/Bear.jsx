import React from 'react';
import './App.css';

const CareBear = ({ name }) => {
  const bearName = name.toLowerCase().replace(/ /g, '-');

  return (
    <div>
      <span className={`${bearName}-logo`}></span>
      <span className={bearName}>My name is {name}.</span>
    </div>
  );
};

export default CareBear;