// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContex";
import ChangeCounter from "../componet/ChangeCounter";

// 4 - refatorando com o hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Bem-vindo a página icicial!!!</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor do contexto */}
      <ChangeCounter />
      {/* 6 - alterando state complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      </div>
      <div>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
