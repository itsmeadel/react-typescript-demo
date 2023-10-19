
import './App.css';
import {Greet} from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from './components/PersonList';

function App() {

  const personName = {
    first: 'Adele',
    last: 'Diola',
  }

 
  const nameList = [
    {
    first: 'Carl',
    last: 'J.'
    },
    {
      first: 'Mary',
      last: 'A.'
      },
      {
        first: 'Elij',
        last: 'N.'
        },
  ]
  return (
    <div className="App">
      <Greet name="Adele" messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
  
    </div>
  );
}

export default App;
