import React from 'react';
import './style.css';

function index({ titulo, subtitulo1, subtitulo2 }) {
  return (
    <div id="introducao">
      <div className="container">
        <h1>{titulo}</h1>
        <p>{subtitulo1}</p>
        <p>{subtitulo2}</p>
      </div>
    </div>
  );
}

export default index;
