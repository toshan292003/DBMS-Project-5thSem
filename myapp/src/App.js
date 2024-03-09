import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import About from './Pages/about';
import Home from './Pages/home';
import Location from './Pages/location';
import Services from './Pages/services';
import Tables from './Pages/Tables';

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
          <Route path = "/input" element={<Location></Location>}></Route>
          <Route path = "/tables" element={<Tables></Tables>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;