const UserDetails = ({ name, age, career }) => {
  return (
    <div>
      <h2>Detalhes de usuários</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {career}</li>
        {age >= 18 ? (
          <li>Já pode tirar a carteira de motorista</li>
        ) : (
          <li>Não pode tirar a carteira de motorista</li>
        )}
      </ul>
    </div>
  );
};

export default UserDetails;
