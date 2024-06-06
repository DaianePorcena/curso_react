import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const n = 15;

  const [name] = useState("React");

  const redTitle = false;

  return (
    <div className="App">
      {/* css global */}
      <h1>React com css</h1>
      {/* css component */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/* Inline css */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "React" ? { color: "cyan", backgroundColor: "#000" } : null
        }
      >
        CSS dinâmico
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* Css modules */}
      <Title />
    </div>
  );
}

export default App;
