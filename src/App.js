import React, { useState, useEffect } from 'react';
import './App.css';
import FactList from "./components/factList/FactList";
import Header from "./components/header/Header";
import ShowFactsButton from "./components/showFactsButton/ShowFactsButton";
import { CircularProgress } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const URL = "https://cat-fact.herokuapp.com/facts/random";
const AMOUNT = 5;
const ANIMAL = "cat";

function App() {

  const [facts, setFacts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomFacts(AMOUNT, ANIMAL)
  }, []);

  function showProgress() {
    if (facts) {
      setFacts(null)
    }

    if (error) {
      setError(null)
    }
  }

  function fetchRandomFacts(amount, animal) {
    showProgress();
    fetch(`${URL}?animal_type=${animal}&amount=${amount}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`Error code: ${response.status}`);
        }

        return response.json()
      })
      .then(facts => {
        setTimeout(() => setFacts(facts), 500);
      })
      .catch(err => {
        setTimeout(() => setError(err), 500);
      })
  }

  function renderContent() {
    if (!facts && !error) {
      return (
        <div className="progress">
          <CircularProgress />
        </div>
      )
    } else if (error) {
      return (
        <Alert severity="error" title="blabla">
          <AlertTitle>Sorry, an error occured</AlertTitle>
          {error.message}
        </Alert>
      )
    } else {
      return (
        <React.Fragment>
          <FactList facts={facts} />
          <ShowFactsButton onClick={() => fetchRandomFacts(AMOUNT, ANIMAL)} />
        </React.Fragment>
      )
    }
  }


  return (
    <div className="App">
      <Header />
      {renderContent()}
    </div>
  );
}

export default App;
