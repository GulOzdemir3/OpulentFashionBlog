
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage';
import About from './pages/About';
import Charts from './pages/Charts';
import Contact from './pages/Contact';
// import DynamicCharts from './components/DynamicCharts';


function App() {

  return (
    <div className="App">
    <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/charts" element={<Charts />}></Route>
            {/* <Route path="/charts/:chartType" element={<DynamicChart />}></Route> */}
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        {/* <p>{!data ? "Loading..." : data}</p> */}
    </div>
  );
}

export default App;
