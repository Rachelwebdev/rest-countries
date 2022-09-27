import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  const url = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {countries.map((country) => {
        return <p>{country.name.common}</p>;
      })}
    </div>
  );
}

export default App;
