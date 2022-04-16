import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <h1> Welcome to my first react app</h1>
      <ExpenseItem expenseVal="200"></ExpenseItem> 
    </div>
  );
}

export default App;
