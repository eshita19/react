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
- **Fragements**
  -  We have a limitation of always having only single parent root for all react elements.  This can be overcome by wrapping the React JSX code with  `Fragements` instead of having explicit `div`.
  -  ```
     render() {
        return (
          <React.Fragment>
            <ChildA />
            <ChildB />
            <ChildC />
          </React.Fragment>
        );
      }
     ```
- **Portals** 
  - Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
  - Normally, when you return an element from a component’s render method, it’s mounted into the DOM as a child of the nearest parent node. However, sometimes it’s useful to insert a child into a different location in the DOM.    
  - ```
     render() {
        // React does *not* create a new div. It renders the children into `domNode`.
        // `domNode` is any valid DOM node, regardless of its location in the DOM.
        return ReactDOM.createPortal(
          this.props.children,
          domNode
        );
      }
    ```
- **Refs**
  - React Refs can be used to get reference of an element's dom rendered in the component.
  - ```
     const inputElement = useRef();
     //inputElement.focus() => Focus on element
     //inputElement.current.value => Get the value of the element
     <input type="text" ref={inputElement} />
    ```  
- **useEffect**:
   - Use effect can be used to execute all Side effects( Logic which is outside React context - For example initailizing model from API response, Settign some other variable based on form state).
   - useEffect function runs once the component is rendered and each time the dependencies mentioned in array changes.
   - useEffect can be used to avoid continious loop as directly using setState() function during component initialization will cause infinite loop.
   - Example:
      ```
     useEffect( () => {if(localStorage.getItem("user")){
          setUser({...user, uName: localStorage.getItem("user")});
        }}, [])
      ```
- **useReducer**:
  - [useReducer](https://dmitripavlutin.com/react-usereducer/) can be used to update complex state objects based on actions.
  
- **React Zustand**:
      
    
     
    

  
  
  
