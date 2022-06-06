import React from 'react';
import './App.css';
import PersonComponent from './components/PersonComponent';
let peopleArr = [
  { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
  { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
  { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
  { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "brown" },
]
function App() {
  return (
    <div className="App">

      {peopleArr.map((person, index) => {
        return <PersonComponent key={index} firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })}

    </div>
  );
}

export default App;
