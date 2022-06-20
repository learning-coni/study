import React, { useState } from "react";

const Inputs = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const { name, email, tel } = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input id="name" type="text" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input id="email" type="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>연락처</label>
        <input id="tel" type="tel" value={tel} onChange={onChange} />
      </div>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>연락처: {tel}</p>
    </div>
  );
};

export default Inputs;
