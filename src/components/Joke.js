import React from "react";

function Joke(props) {
  return (
  <div className = "jokeCard">
   <h1>Joke card!</h1>
   <h3>{props.setup}</h3>
   <h3>{props.punchline}</h3>
  </div>
 
  
  )
}

export default Joke;