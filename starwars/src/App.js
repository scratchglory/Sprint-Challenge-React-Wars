import React, { useState, useEFfect, useEffect } from "react";
import axios from "axios";
import PeopleList from "./components/PeopleList";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        let data = res.data.results;
        setPeople(data);
      })
      .catch(err => console.log(err, "NO DATA"));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PeopleList people={people} />
    </div>
  );
};

export default App;
