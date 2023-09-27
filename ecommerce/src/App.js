// import logo from './logo.svg';
// import './index.css';

// function App() {
//   return (
//     //<></> : react fragment
//     <>
//     <div className="App">
//       <h1>React App</h1>
//     </div>
//     </>
//   );
// }

// export default App;


import React from 'react';

import "./index.css";
import {  BrowserRouter as Router , Routes,Route } from "react-router-dom";
import ParentComponent from "./componentsPractice/parentComponent";
import AnotherParentComponent from "./componentsPractice/anotherParentComponent";
import NavbarComponent from './componentsPractice/Frontend/navbarComponent';
import Home from './componentsPractice/Frontend/home';
import Aboutus from './componentsPractice/Frontend/Aboutus';
import Viewproduct from './componentsPractice/Frontend/viewproduct';
import Register from './componentsPractice/Frontend/register';
import Login from './componentsPractice/Frontend/login';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/viewproduct" element={<Viewproduct/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        {/*<Route path="/" element={<ParentComponent />} />
        <Route path="/parent" element={<AnotherParentComponent />} /> */}
      </Routes>

      {/* <FooterComponent /> */}
    </Router>



  );
}

export default App;
 