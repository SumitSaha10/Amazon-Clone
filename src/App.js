import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase'
import { useEffect } from 'react';
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (localStorage.getItem('userEmail')) {
      dispatch({
        type: 'SET_USER',
        user: localStorage.getItem('userEmail')
      })
    }
  }, [1])
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
