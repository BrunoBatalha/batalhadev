import React from 'react';
import './style.css';
import Introducao from './components/introducao';

function App() {
  return (
    <>
      <Introducao titulo="BatalhaDev" subtitulo1="WebDesigner" subtitulo2="Evoluindo sua empresa digitalmente" />
      <section>
        <h2>Sobre mim</h2>
        <p>
          Olá, sou Bruno Batalha, tenho o objetivo de aumentar a
          visibilidade e lucros de pequenos e médios empreendedores no
          mercado, com a criação de sites contendo a essência de seu
          negócio.
        </p>
        <img src="" alt="BatalhaDev" />
        <p>
          Programador de sites, com mais de 3 anos de experiência em
          programação. Formado como Técnico em Informática pelo
          Instituto Federal de Educação Ciência e Tecnologia do
          Amazonas
        </p>
      </section>
      <section>
        <h2>Skills</h2>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </section>
      <section>
        <h2>Portfolio</h2>
        <div>
          <div><img src="" alt="" srcSet="" /></div>
          <a href="https://">Item 1</a>
        </div>
        <div>
          <div><img src="" alt="" srcSet="" /></div>
          <a href="https://">Item 2</a>
        </div>
        <div>
          <div><img src="" alt="" srcSet="" /></div>
          <a href="https//">Item 3</a>
        </div>
      </section>
      <section>
        <h2>Entre em contato</h2>
        <a href="http://">
          <img src="" alt="" srcSet="" />
        </a>
        <a href="http://">
          <img src="" alt="" srcSet="" />
        </a>
      </section>
      <footer>
        <p>BatalhaDev 2020 - Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default App;
