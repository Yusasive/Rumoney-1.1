import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Community from "./pages/Community";
import HireMarketers from "./pages/HireMarketers";
import HireTalents from "./pages/HireTalents";
import Cohorts from "./pages/Cohort";
import Courses from "./pages/Courses";
import ScrollToTop from "./ScrollToTop";
import NotFoundView from "./component/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ScrollToTop />
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
            <Route path="*" element={<NotFoundView />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
