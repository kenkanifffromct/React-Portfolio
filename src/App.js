import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Project from "./components/Project"

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Project/>
    </>
  );
}

export default App;