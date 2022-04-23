import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import List from './components/List';
import Filter from './components/Filter';
import ClearCompleted from './components/ClearCompleted';

function App() {
  const items = useSelector((store) => store.todos.items);
  const itemsLeft = items.filter(item => item.completed === false)

  return (
    <div className="App">
      <section className="todoapp">
        <Header />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor='toggle-all'>
            Mark all as complete
          </label>

          <List />
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{itemsLeft.length}</strong>
            {' '}
            item{itemsLeft.length > 1 && 's' } left
          </span>
          <Filter />
          <ClearCompleted />
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}

export default App;
