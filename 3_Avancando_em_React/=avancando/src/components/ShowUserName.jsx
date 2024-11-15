const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuário é: {props.name || "Usuário desconhecido"}</h2>
    </div>
  );
};

export default ShowUserName;
