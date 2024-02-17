import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [label, setLabel] = useState(10);
  const [runCounter, setRuncounter] = useState(false);

  const handleChange = () => {
    setRuncounter(true);
  };

  useEffect(() => {
    if (runCounter) {
      if (label > 0) {
        setTimeout(() => {
          if (label > 0) {
            setLabel((val) => val - 1);
          }
        }, 1000);
      } else {
        setRuncounter(false);
      }
    }
  }, [runCounter, label]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello Everyone.</h3>
        <h5>Count is: {label}</h5>
        <button onClick={handleChange}>Change Count</button>
      </header>
    </div>
  );
}

export default App;
