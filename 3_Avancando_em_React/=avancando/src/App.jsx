import "./App.css";

// importando uma imagem
import night from "./assets/night.jpg";

// useState
import Data from "./components/Data";

// renderização de lista
import ListRender from "./components/ListRender";

import ConditionalRender from "./components/ConditionalRender";

import ShowUserName from "./components/ShowUserName";

import CarDetails from "./components/CarDetails";

import Fragments from "./components/Fragments";

import Container from "./components/Container";

import ExecuteFunction from "./components/ExecuteFunction";

import { useState } from "react";

import Message from "./components/Message";

import ChangeMessage from "./components/ChangeMessage";

// função em promp
function showMessage() {
  console.log("Evento do componente pai");
}

// renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Verde", km: 0 },
  { id: 2, brand: "BMW", color: "Azul", km: 200000 },
  { id: 3, brand: "Mercedes", color: "Prata", km: 32000 },
];


function App() {
  
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };
  
  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando no React</h1>
      {/** imagem em public */}
      <img src="/img.jpg" alt="imagem" />
      {/* imagem em assets */}
      <img src={night} alt="outra imagem" />
      {/** useState */}
      <Data />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="" />
      <CarDetails brand="Mustang" km={35} color="preto" />
      <CarDetails brand="Audi" km={150} color="azul" />
      <CarDetails brand="BMW" km={15} color="vermelho" />

      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      <Fragments />
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
