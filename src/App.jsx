import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const url = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);

  //use async/await to fetch data
  const getCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  //Calls the function "getCountries" when the page loads
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Home countries={countries} />
      </main>
    </div>
  );
}

export default App;
