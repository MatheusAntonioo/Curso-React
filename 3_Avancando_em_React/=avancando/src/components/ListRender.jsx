import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 29 },
    { id: 2, name: "Pedro", age: 19 },
    { id: 3, name: "João", age: 25 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      {/** render sem key */}
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/** render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;