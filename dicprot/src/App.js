import logo from './logo.svg';
import './App.css';
import AcercaDe from './Componentes/AcercaDe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un parrafo</p>

        <AcercaDe />
      </header>
    </div>
  );
}

export default App;
