import "./App.css";
import CarsDetails from "./components/CarsDetails";

function App() {
  const cars = [
    { id: 1, name: "Gol", brand: "Volkswagen", color: "red" },
    { id: 2, name: "Uno", brand: "Fiat", color: "blue" },
    { id: 3, name: "Onix", brand: "Chevrolet", color: "black" },
    { id: 4, name: "HB20", brand: "Hyundai", color: "white" },
  ];

  return (
    <div className="App">
      <h1>Carros a venda</h1>
      <div className="car-container">
        {cars.map((car) => (
          <CarsDetails
            key={car.id}
            name={car.name}
            brand={car.brand}
            color={car.color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
