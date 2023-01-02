import './App.css';
import Joke from './components/Jokes'

function App() {
  return (
    <div className="App">
    <h1>Hi</h1>
    <Joke setup = "What a good joke?"
    punchline = "This is!"
    />
    <Joke setup = "What a good joke now?"
    punchline = "This is! Too!"
    />
    </div>
  );
}

export default App;
