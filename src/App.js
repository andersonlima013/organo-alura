import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <p>
          Edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda react
        </a>
      </header>
    </div>
  );
}

export default App
