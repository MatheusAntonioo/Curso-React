const TemplateExpression = () => {
  const name = "Matheus";

  const data = {
    age: 29,
    job: "Programador",
  };

  return (
    <div>
      <p>A soma é {2 + 2}</p>
      <h3>Seu nome é {name}</h3>
      <p>
        Sua idade é {data.age} anos e você é um {data.job}.
      </p>
    </div>
  );
};

export default TemplateExpression;
