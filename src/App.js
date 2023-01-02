import React from "react";
import "./App.css";
import Joke from "./components/Joke";
import JokeData from "../src/components/JokeData";

function App() {
  const JokeElements = JokeData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div>{JokeElements}</div>;
}

export default App;
