import React, { useState } from "react";
import Input from "../components/Input";
import Inputs from "../components/Inputs";

const Counter = () => {
  const [num, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(num + 1);
  };

  const onDecrease = () => {
    setNumber(num - 1);
  };

  return (
    <div className="counter">
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <p>{num}</p>

      <Input></Input>
      <hr />
      <Inputs></Inputs>
    </div>
  );
};

export default Counter;
