import './App.css';
import { TodoList } from './Todolist';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Список дел на сегодня</h1>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
