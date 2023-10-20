

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import './App.css';
import {Greet} from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from './components/PersonList';
import {Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Buttons } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Greet name="Adele"  isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder text</Heading>
      <Oscar><Heading>Oscar De Carpio</Heading></Oscar>
      <Buttons handleClick ={ (event, id) => {
        console.log('Button Clicked', event)
      }}/>
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles= {{ border: '1px solid black', padding: '1rem'}} />
      
      
    </div>
  );
}

export default App;
