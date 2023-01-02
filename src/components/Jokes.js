import React from "react";

export default function Joke(props) {
  return (
    <div>
      <h1>Joke Time!</h1>
      <h2>{props.setup}</h2>
      <p>{props.punchline}</p>
    </div>
  );
}
