import logo from './logo.svg';
import './App.css';

import Navbar from './Pages/Navbar';
import About from './Pages/about';
import Home from './Pages/home';
import Services from './Pages/services';
import Tables from './Pages/Tables';
import Input from './Pages/Inputs';

import Location from './Pages/Inputs/location';
import Parameter from './Pages/Inputs/Parameters';
import Measurement from './Pages/Inputs/measure';
import Quality from './Pages/Inputs/quality';
import Sample from './Pages/Inputs/Sample';

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
          <Route path = "/input" element={<Input></Input>}></Route>
          <Route path = "/location" element={<Location></Location>}></Route>
          <Route path = "/parameter" element={<Parameter></Parameter>}></Route>
          <Route path = "/measurement" element={<Measurement></Measurement>}></Route>
          <Route path = "/quality" element={<Quality></Quality>}></Route>
          <Route path = "/sample" element={<Sample></Sample>}></Route>
          <Route path = "/tables" element={<Tables></Tables>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;