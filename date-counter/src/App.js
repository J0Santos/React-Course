import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepMinus() {
		if (step > 1)
    	setStep((s) => s - 1);
  }

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleCountMinus() {
    setCount((s) => s - 1);
  }

  function handleCountPlus() {
    setCount((s) => s + 1);
  }

  const date = new Date();
	const displayDate = new Date(date.setDate(date.getDate() + count * step))

  let preDate = handlePreDate();
  function handlePreDate() {
    let str = "";
    if (count > 0) {
      str = (count * step) + " days from today is ";
    } else if (count < 0) {
      str = (count * step) * -1 + " days ago was ";
    } else {
      str = "Today is ";
    }
    return str;
  }

  return (
    <div>
      <div>
        <button onClick={handleStepMinus}>-</button>
        <p>Step: {step}</p>
        <button onClick={handleStepPlus}>+</button>
      </div>

      <div>
        <button onClick={handleCountMinus}>-</button>
        <p>Count: {count}</p>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        {preDate}
        {displayDate.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })}
      </p>
    </div>
  );
}

export default App;
