import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Community from "./pages/Community";
import HireMarketers from "./pages/HireMarketers";
import HireTalents from "./pages/HireTalents";
import Cohorts from "./pages/Cohort";
import Courses from "./pages/Courses";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/community" element={<Community />}></Route>
            <Route
              exact
              path="/hire-marketers"
              element={<HireMarketers />}></Route>
            <Route exact path="/hire-talents" element={<HireTalents />}></Route>
            <Route exact path="/cohort" element={<Cohorts />}></Route>
            <Route exact path="/courses" element={<Courses />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
