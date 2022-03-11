import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnderNav from './components/underNav';
function App() {
  return (
    <div className="App">
      <Navigation />
      <UnderNav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


export default App;
