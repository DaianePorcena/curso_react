// arquivos de  estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
  // essa função retorna um JSX
  return (
    <div>
      {/* comentário JSX */}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
