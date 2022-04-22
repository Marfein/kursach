import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";

const App=()=> {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
      <div className="app-wrapper-content"><Navbar /></div>


          </div>
      </BrowserRouter>

  );
}

export default App;
