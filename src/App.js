import React from "react";
import { Link } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import Router from './Router';

function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/customers"><AppCustomers /></Link>
          </li>
          <li>
            <Link to="/products"><AppProducts /></Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div >
  );
}

export default App;
