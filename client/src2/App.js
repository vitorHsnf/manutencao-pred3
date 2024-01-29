import {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/sensor")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Hello": data}</p>
      </header>
    </div>
  );
}

export default App;
