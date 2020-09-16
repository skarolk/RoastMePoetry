import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavMenu from "./Header/NavMenu/NavMenu";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavMenu />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>When you hate enough to send the very worst</p>
          <Button variant="outline-info">Buy Now</Button>
        </header>
      </div>
    </>
  );
}

export default App;
