import React from "react";

const Script = () => {
  const userList = [
    { name: "Mike", age: 30 },
    { name: "John", age: 20 },
    { name: "Jack", age: 10 },
    { name: "Harry", age: 40 },
    { name: "Steve", age: 50 },
    { name: "Tom", age: 50 },
  ];

  let results = userList.reduce((acc, cur) => {
    if (cur.name.length > 3) {
      acc.push(cur);
    }
    return acc;
  }, []);

  return (
    <div className="container">
      <div>
        {results.map((result) => {
          const { name, age } = result;
          return (
            <p>
              My name is {name} and {age} years old.
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Script;
