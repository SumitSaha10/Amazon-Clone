import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
function App() {

  return (
    <div className="App">
      <Router>
        {/* header */}
        <Header />
        <Routes>
          {/* home */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/login' element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
