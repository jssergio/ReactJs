import Item from "./components/Item";
import Card from "./components/Card";
import Counter from "./components hooks/Counter";

const App= () => {
  return (<>
    <h1>REACT PROJETO 01</h1>
    <p>Evitar criar Divs</p>
   <ul>
   {/*<Item texto='Item 01'/>
   <Item texto='Item 02'/>  forma Defaul de Inserir texto */}
   <Item>Item 01</Item>
   <Item>Item 02</Item>  
  </ul>
  <Card/>
  <Counter/>
   </>)
 
}
export default App;

// ----Codigo Original----
/*import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;*/
