
import './App.css';
import PersonCard from './components/PersonCard'

let people = [
  {"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black"},
  {"firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown"},
  {"firstName": "Millard", "lastName": "Fillmore", "age": 50, "hairColor": "Brown"},
  {"firstName": "Waseem", "lastName": "Wahid", "age": 100, "hairColor": "Black & White"},
]
function App() {
  return (
    <div className="App">
      {people.map(p =>{
        return <PersonCard firstName={p.firstName} lastName={p.lastName} age={p.age} hairColor={p.hairColor} />
      })
      }
    </div>
  );
}

export default App;
