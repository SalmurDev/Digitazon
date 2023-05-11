import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function handleNum1Change(event) {
    setNum1(parseInt(event.target.value));
  }

  function handleNum2Change(event) {
    setNum2(parseInt(event.target.value));
  }

  function handleSumClick() {
    setResult(num1 + num2);
  }

  return (
    <div>
      <label>
        Number 1:
        <input type="number" value={num1} onChange={handleNum1Change} />
      </label>
      <label>
        Number 2:
        <input type="number" value={num2} onChange={handleNum2Change} />
      </label>
      <button onClick={handleSumClick}>Calculate Sum</button>
      <label>
        Result:
        <input type="number" value={result} readOnly />
      </label>
    </div>
  );
}
