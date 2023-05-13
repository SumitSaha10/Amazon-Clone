import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      {/* header */}
      <Header/>
      <Routes>
      {/* home */}
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
