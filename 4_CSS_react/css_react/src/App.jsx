import "./App.css";

import MyComponent from "./components/MyComponent";

import Title from "./components/Title";

function App() {
  const cssDin = 15;

  const redTitle = true;

  return (
    <>
      <div className="App">
        <h1>CSS no React</h1>

        <MyComponent />

        <p>Esse paragrafo tmb vai ser alterado</p>
        <p
          style={{
            color: "blue",
            padding: "25px",
            borderTop: "1px dotted blue",
          }}
        >
          Este elemento tem estilos inline
        </p>

        <h2 style={cssDin > 10 ? { color: "purple" } : { color: "magenta" }}>
          CSS dinâmico
        </h2>
        <h2 style={cssDin > 20 ? { color: "purple" } : { color: "magenta" }}>
          CSS dinâmico 2
        </h2>

        <h2 className={redTitle ? "redTitle" : "title"}>
          Este titulo vai ter uma classe
        </h2>

        <Title />

      </div>
    </>
  );
}

export default App;
