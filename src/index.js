// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./components/CommentDetail";
import ClassCountUp from "./components/ClassCountUp";
import ApprovalCard from "./components/ApprovalCard";
// function getButtonText() {
//   return "Click on me!";
// }

// Create a react component
const App = function() {
  const buttonText = { text: "Click me" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail author="Sam" />
        </ApprovalCard>
        <CommentDetail author="Alex" />
        <CommentDetail author="Jane" />
      </div>
      <ClassCountUp targetNum="5000" />
    </div>
  );
};

// Take the react component and show it on the screen
// React 18
const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
// ReactDOM.render(<App />, document.querySelector("#root"));
