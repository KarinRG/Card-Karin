import React from 'react';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';
import Card from './Card';

function Home() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Card
              imageSrc="tortaoreo.jpg"
              imageAlt="Imagen 1"
              title="Título de la Tarjeta 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simlique quaerat nam illo aspernatur vitae fugiat numquam repellat"
              link="#"
              buttonText="Ver más"
            />
          </div>
          <div className="col-md-3">
            <Card
              imageSrc="torta.jpg"
              imageAlt="Imagen 2"
              title="Título de la Tarjeta 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simlique quaerat nam illo aspernatur vitae fugiat numquam repellat"
              link="#"
              buttonText="Ver más"
            />
          </div>
		  <div className="col-md-3">
            <Card
              imageSrc="frutosrojos.jpg"
              imageAlt="Imagen 1"
              title="Título de la Tarjeta 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simlique quaerat nam illo aspernatur vitae fugiat numquam repellat"
              link="#"
              buttonText="Ver más"
            />
          </div>
          <div className="col-md-3">
            <Card
              img src="tortachoco.jpg"
              imageAlt="Imagen 1"
              title="Título de la Tarjeta 4"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid simlique quaerat nam illo aspernatur vitae fugiat numquam repellat"
              link="#"
              buttonText="Ver más"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
