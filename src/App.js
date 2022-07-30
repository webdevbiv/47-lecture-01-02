import Button from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';
import { ButtonAnother } from './components/Button/Button';
import './App.css';

function App() {
  const students = [
    { name: 'Peter', age: 23 },
    { name: 'Alisa', age: 22 },
    { name: 'Steve', age: 34 },
    { name: 'Alex', age: 45 },
    { name: 'Maggy', age: 30 },

  ]
  return (
    <div className="App">
      <div>test</div>
      <Button
        btnText='new button'
        disabled={false}
        loader
      />
      <Button btnText='click me' />
      <Button btnText='press me' />
      {/* <ButtonAnother /> */}
      {
        students.map(item => (<ListItem name={item.name} age={item.age} key={item.name} />))
      }
    </div>
  );
}

export default App;
