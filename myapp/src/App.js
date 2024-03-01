import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/home';
import {Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path = "/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;