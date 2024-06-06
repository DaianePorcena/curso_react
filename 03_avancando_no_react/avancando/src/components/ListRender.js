import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["React", "Vue", "Angular", "Svelte"]);
  const [users, setUsers] = useState([
    { id: 1, name: "João", age: 30 },
    { id: 2, name: "Maria", age: 25 },
    { id: 3, name: "José", age: 35 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <h2>Lista de Frameworks</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
