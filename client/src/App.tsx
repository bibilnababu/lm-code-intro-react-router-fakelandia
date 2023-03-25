import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/home";
import "./components/confession";
import "./components/misdemeanour";
import "./components/react-router";
import ReactRouter from "./components/react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ReactRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
