import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      setCharacters(data)
    };

    getCharacters();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Gallery data={characters} />
      </div>
    </div>
  );
}

export default App;
