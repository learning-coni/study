// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import List from "./pages/List";
import Script from "./pages/Script";
// function getButtonText() {
//   return "Click on me!";
// }

// Create a react component
const App = function() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/list">List</Link>
        <Link to="/script">Script</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/list" element={<List />} />
        <Route path="/script" element={<Script />} />
      </Routes>
    </div>
  );
};

// Take the react component and show it on the screen
// React 18
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
// ReactDOM.render(<App />, document.querySelector("#root"));
