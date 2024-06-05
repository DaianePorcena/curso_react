const TemplateExpressions = () => {
  const name = "Carlos";
  const data = {
    age: 31,
    job: "Developer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job}</p>
    </div>
  );
};

export default TemplateExpressions;
