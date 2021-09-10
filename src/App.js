import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather React App</h1>
        <Weather city="Amsterdam"/>
      </header>
    </div>
  );
}

export default App;
