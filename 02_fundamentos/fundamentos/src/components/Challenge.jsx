const Challenge = () => {
  const number1 = 10;
  const number2 = 20;

  const handleClick = () => {
    const sum = number1 + number2;
    console.log(sum);
  };

  return (
    <div>
      <h2>Desafio 2</h2>
      <p>Valor do numero 01: {number1} </p>
      <p>Valor do numero 02: {number2} </p>

      <button onClick={handleClick}>
        Clique para saber a soma dos valores!
      </button>
    </div>
  );
};

export default Challenge;
