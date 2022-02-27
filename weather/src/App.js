import './assets/style/style.scss';
import Home from './pages/Home';
import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
