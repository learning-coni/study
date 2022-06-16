import React from "react";
import CommentDetail from "../components/CommentDetail";
import ClassCountUp from "../components/ClassCountUp";
import ApprovalCard from "../components/ApprovalCard";
import faker from "faker";

const Home = () => {
  const buttonText = { text: "Click me" };
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div className="Home">
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

export default Home;
