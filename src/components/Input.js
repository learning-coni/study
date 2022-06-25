import React, { useState } from "react";

const Input = () => {
  const [textValue, setTextValue] = useState("");

  const onChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <>
      <input onChange={onChange}></input>
      <p>{textValue}</p>
    </>
  );
};

export default Input;
