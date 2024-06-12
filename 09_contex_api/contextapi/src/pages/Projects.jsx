// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContex";

import { useCounterContext } from "../hooks/useCounterContext";

const Projects = () => {
  // const { counter } = useContext(CounterContext);]
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Veja os nossos projetos!</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Projects;
