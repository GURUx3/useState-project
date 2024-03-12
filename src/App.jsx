import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [nums, setNums] = useState({
    first: 0,
    second: 0,
    third: 0,
    total: 0,
  });

  let allNumber = nums.first + nums.second + nums.third;

  const handleFirst = () => {
    setNums({ ...nums, first: nums.first + 1 });
  };
  const handleSecond = () => {
    setNums({ ...nums, second: nums.second + 1 });
  };
  const handleThird = () => {
    setNums({ ...nums, third: nums.third + 1 });
  };

  const handleAll = () => {
    setNums({ ...nums, total: allNumber });
  };

  const handleClear = () => {
    setNums({ ...nums, first: (nums.first = 0) });
    setNums({ ...nums, second: (nums.second = 0) });
    setNums({ ...nums, third: (nums.third = 0) });
    setNums({ ...nums, total: (nums.total = 0) });
  };

  return (
    <div className="main">
      <div className="container">
        <h1>useState Project </h1>
        <p>First :{nums.first}</p>
        <p>Second :{nums.second}</p>
        <p>Third :{nums.third}</p>
        <p>Total : {nums.total}</p>
        <button onClick={handleFirst}>First</button>
        <button onClick={handleSecond}>Second</button>
        <button onClick={handleThird}>Third</button>
        <button onClick={handleAll}>Add All</button>
        <button onClick={handleClear}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
