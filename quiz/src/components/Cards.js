import './cards.css';
import React from 'react';

function Cards({ id, name, link, comics }) {
  return (
    <div className="card">
      <h1>name: {name}</h1>
      <img className="img" src={link} alt="" />
      <p>Comics: {comics}</p>
    </div>
  );
}

export default Cards;
