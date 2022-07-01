import logo from './logo.svg';
import './App.css';
import Apresentation from './Componentes/primeiroComponente';

function App() {
  const textJSX = 'Hello, JSX';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{textJSX}</h1>
        < Apresentation />
      </header>
    </div>
  );
}


export default App;
