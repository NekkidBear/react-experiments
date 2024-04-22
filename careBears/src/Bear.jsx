import React from 'react';
import './CareBears.css';

const CareBear = ({ name }) => {
  const bearName = name.toLowerCase().replace(/ /g, '-');
  const bearLogoClass = `${bearName}-logo`;

  return (
    <div>
      <span className={`${bearName}-bear-logo`}></span>
      <span className={`${bearName}-bear`}>My name is {name}. I</span>
    </div>
  );
};

export default CareBear;