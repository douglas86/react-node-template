import logo from "../assets/logo.svg";
import "../styles/App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(async (response) => {
        const results = await response.json();
        setState(results.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {state
          ? state.map((items) => <p key={items.id}>{items.title}</p>)
          : null}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
