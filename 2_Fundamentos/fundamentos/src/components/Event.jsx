const Event = () => {
  const handleClick = () => {
    console.log("Executou");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderizando outra coisa!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => console.log("testando")}>Clique aqui</button>
      </div>
      <div>
        <button onClick={handleClick}>clique aqui</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Event;
