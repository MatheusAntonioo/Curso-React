import "./MyForm.css";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MyForm = ({ userName, userEmail }) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  // manipulando dados do nome
  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name, email);

  const handleSubmit = (e) => {
    e.preventDefault();

    //limpando form
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            // controlled input "atribuindo valores pré-existente aos inputs dos forms. ou entregando uma string vazia se não tiver valor" também pode iniciar com a string vazia direto pelo useState
            value={name || ""}
          />
        </div>

        {/* Label envolvendo Input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            // manipulando dados do email simplificado
            onChange={(e) => setEmail(e.target.value)}
            // controlled input
            value={email || ""}
          />
        </label>

        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForm;
