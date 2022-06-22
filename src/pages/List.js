import React from "react";
import ScrollLoading2 from "../components/ScrollLoading2";

const User = ({ userData }) => {
  return (
    <tr>
      <td>{userData.email}</td>
      <td>{userData.name}</td>
    </tr>
  );
};

const userList = () => {
  const users = [
    { email: "user1@gmail.com", name: "유재석" },
    { email: "user2@gmail.com", name: "김종국" },
    { email: "user3@gmail.com", name: "하하" },
    { email: "user4@gmail.com", name: "송지효" },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>이메일</th>
            <th>사용자</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User userData={user} />
          ))}
        </tbody>
      </table>
      <div>
        <ScrollLoading2 />
      </div>
    </div>
  );
};

export default userList;
