import "./MyForm.css";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MyForm = ({ userName, userEmail }) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  // manipulando dados do nome
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, bio, role);

    //limpando form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
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
        {/* Textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* Select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default MyForm;
