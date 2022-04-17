# Bootstrap
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
  - The React component can accept special property called "props". We can pass values from parent component to child component using props. It provides One way binding. That is any update made to props object in child component is not reflected.
  - Use React hook "useState", This provides the state and setter function of state. Whenever setter function is called child component is revaluated.
  
  
