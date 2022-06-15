// Import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./components/CommentDetail";
import ClassCountUp from "./components/ClassCountUp";
import ApprovalCard from "./components/ApprovalCard";
import faker from "faker";
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
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            comment="I'm Sam"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Alex"
            timeAgo="Today at 2:00AM"
            comment="I'm Alex"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Jane"
            timeAgo="Yesterday at 5:00PM"
            comment="Hi, I'm Jane"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
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
