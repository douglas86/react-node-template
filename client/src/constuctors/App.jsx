import logo from "../assets/logo.svg";
import "../styles/App.css";
import { useEffect } from "react";
import useAppContext from "../hooks/useAppContext";

function App() {
  const { state, dispatch } = useAppContext();
  const { userReducers } = state;
  const { user } = userReducers;

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then(async (response) => {
        const results = await response.json();
        dispatch({ type: "UPDATE USER DATA", payload: results.data });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  console.log("user", user);

  return (
    <div className="App">
      <header className="App-header">
        <>
          {user !== "None"
            ? Object.values(user).map((items) => (
                <p key={items.id}>{items.title}</p>
              ))
            : null}
        </>

        <img src={`${logo}`} className="App-logo" alt="logo" />
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
