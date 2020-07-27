import React, { useState, useEffect } from 'react';
import './App.css';
import Facts from "./components/facts/Facts";
import Header from "./components/header/Header";
import MoreFacts from "./components/moreFacts/MoreFacts";

const URL = "https://cat-fact.herokuapp.com/facts/random";
const AMOUNT = 5;
const ANIMAL = "cat";

function App() {

  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    fetchRandomFacts(AMOUNT, ANIMAL)
  }, []);

  function fetchRandomFacts(amount, animal) {
    setProgress(true);
    fetch(`${URL}?animal_type=${animal}&amount=${amount}`)
      .then(response => response.json())
      .then(facts => {
        setFacts(facts);
        setTimeout(() => setProgress(false), 500)
      })
      .catch(err => {
        setError(err);
        setTimeout(() => setProgress(false), 500)
      })
  }
  return (
    <div className="App">
      <Header />
      <Facts facts={facts} error={error} progress={progress} />
      <MoreFacts onClick={() => fetchRandomFacts(AMOUNT, ANIMAL)} hide={progress} />
    </div>
  );
}

export default App;
