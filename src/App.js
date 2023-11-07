import logo from './logo.svg';
import './App.css';
import RouterReact from './Router/Router';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterReact />
    </div>
  );
}

export default App;
