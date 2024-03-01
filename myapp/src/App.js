import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import About from './Pages/about';
import Home from './Pages/home';
import Services from './Pages/services';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home></Home>}></Route>
          <Route path = "/about" element={<About></About>}></Route>
          <Route path = "/services" element={<Services></Services>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;