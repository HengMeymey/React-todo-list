import React, { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(parseFloat(input1) + parseFloat(input2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(input1) - parseFloat(input2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(input1) * parseFloat(input2));
  };

  const handleDivide = () => {
    if (parseFloat(input2) !== 0) {
      setResult(parseFloat(input1) / parseFloat(input2));
    } else {
      alert("Cannot divide by zero");
    }
  };

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleMultiply}>Multiply</button>
        <button onClick={handleDivide}>Divide</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;