
import './App.css';
import {Greet} from "./components/Greet";
import { Person } from "./components/Person";

function App() {

  const personName = {
    first: 'Adele',
    last: 'Diola',
  }
  return (
    <div className="App">
      <Greet name="Adele" messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
    </div>
  );
}

export default App;
