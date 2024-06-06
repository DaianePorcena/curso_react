import { useState } from "react";
import "./App.css";

import Light from "./assets/lights.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUsername from "./components/ShowUsername";
import CarDetails from "./components/CarDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // const name = "Pedro";
  const [username] = useState("Matheus");

  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Amarela",
      newCar: true,
      km: 0,
    },
    {
      id: 2,
      brand: "KIA",
      color: "Branco",
      newCar: false,
      km: 34343,
    },
    {
      id: 3,
      brand: "Renault",
      color: "Azul",
      newCar: false,
      km: 234,
    },
  ];

  function showMessage() {
    console.log("Evento de componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/image1.jpg" alt="Posto de gasolina" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={Light} alt="Luzes" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUsername name={username} />
      {/* destructuring */}
      <CarDetails brand="VW" km={1000} color="azul" newCar={false} />
      <CarDetails brand="Ford" km={2000} color="vermelho" newCar={true} />
      <CarDetails brand="Chevrolet" km={0} color="preto" newCar={false} />
      {/*loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* fragments */}
      <Fragments propFragment="Texto do fragment" />
      {/* children */}
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>Testando o container</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
