
import './App.css';
import {Greet} from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from './components/PersonList';
import {Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';

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
      <Greet name="Adele"  isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar><Heading>Oscar De Carpio</Heading></Oscar>
  
    </div>
  );
}

export default App;
