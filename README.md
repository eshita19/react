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
- App.js : Holds the JSX code that is javascript inside html.
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
  
  
