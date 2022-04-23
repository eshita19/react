# Bootstrap
- To create a new react app: npx create-react-app user-form
- Two main packages of react are **react** and **react-dom**.
- The starting js and html are index.js and index.html.
- index.html
  ```
  <div id="root"></div>
  ```
- index.js
  ```
  //Define the root element of index.html which should be the parent of React component App
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App/>)
  ```
- App.js : Holds the JSX code that is javascript inside html. The JSX code can have only one root element. There should not be multiple parent elements at root level.
  ```
  function App() {
  return (
    <div className="App">
      <h1> Lets get started </h1>
    </div>
  );
  }

  export default App;
  ```
  
- **State Changes:**
  - The React component can accept special property called "props". We can pass values from parent component to child component. Parent component can set values in Child component's attributes, which will be available as arg to component called as props. It provides One way binding. That is any update made to props object in child component is not reflected.
  - Use React hook "useState", This provides the state and setter function of state. Whenever setter function is called child component is revaluated.
  - ```
     const [expenseAmt, setExpenseAmt] = useState('esh')

    const expenseAmtChangeHandler = (event) => {
        setExpenseAmt(event.value);
        props.onExpenseAmtChange(event.target.value);
    }
    ```
  - **Passing data to parent component from child component**:   
    - Declare an attribute in Child component which takes parent component's function as pointer. Child component can call the callback function to pass the state.


- **Rendering List data** 
   ```
   {students.map(student => <Student key={student.id} name={student.name} age={student.age} gender={student.gender} />)}
   ```
- **Conditional display**
  ```
  {students.length && students.map(student => <Student key={student.id} name={student.name} age={student.age} gender={student.gender} />)}
  ```
  - If condition - Use javascript AND operator.
  - If else condition - Use Ternary operator.
  - Multiple return statement also allowed.

- **Dynamic Styling**
  - Add dynamic style using "style" attribute in JSX code. "Style" accepts an object of css properties.
    ```
     <div style = {{border : isValid? '1px solid black' : '1px solid red', color: color}}> </style>
     <div class = {`form-control $(isInvalid && 'invalid')`}
    ``` 

  
  
  
