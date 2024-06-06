import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const user = [
    { id: 1, name: "Diego", age: 23, career: "Developer" },
    { id: 2, name: "Daiane", age: 28, career: "software engineer" },
    { id: 3, name: "João", age: 16, career: "Student" },
  ];

  return (
    <div className="App">
      <h1>Desafio 04</h1>
      {user.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          career={user.career}
        />
      ))}
    </div>
  );
}

export default App;
