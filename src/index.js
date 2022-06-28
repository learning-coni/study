// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import List from "./pages/List";
import Script from "./pages/Script";
import Form from "./pages/Form";

// function getButtonText() {
//   return "Click on me!";
// }

// Create a react component
class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/list">List</Link>
          <Link to="/script">Script</Link>
          <Link to="/form">Form</Link>
        </nav>
        <div></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/list" element={<List />} />
          <Route path="/script" element={<Script />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    );
  }
}

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
