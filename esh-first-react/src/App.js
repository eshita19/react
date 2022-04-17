import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Student from './components/Student';

function App(props) {
  const [amt, setAmt] = useState('123')
  const expenseAmtChangeHandler = (val) => {
    console.log("Inside App.js" + val)
    setAmt(amt)
  }
  const students = [{id: '1', name: 'Esh', age:31, gender: 'female'},
                    {id: '2', name: 'Saurabh', age:33, gender: 'male'}];
  
  if(students.length){
    return students.map(student => <Student key={student.id} name={student.name} age={student.age} gender={student.gender} />)
  }   
                 
  return (
    <div className="App">
      <h1> Welcome to my first react app: {amt}</h1>
      <div>{amt}</div>
      <ExpenseItem expenseVal="200" onExpenseAmtChange={expenseAmtChangeHandler}></ExpenseItem> 
      {students.length && students.map(student => <Student key={student.id} name={student.name} age={student.age} gender={student.gender} />)}
    </div>
  );
}

export default App;
