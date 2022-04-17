import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App(props) {
  const [amt, setAmt] = useState('123')
  const expenseAmtChangeHandler = (val) => {
    console.log("Inside App.js" + val)
    setAmt(amt)
  }
  return (
    <div className="App">
      <h1> Welcome to my first react app: {amt}</h1>
      <div>{amt}</div>
      <ExpenseItem expenseVal="200" onExpenseAmtChange={expenseAmtChangeHandler}></ExpenseItem> 
    </div>
  );
}

export default App;
