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
    if (step > 1) setStep((s) => s - 1);
  }

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  const date = new Date();
  const displayDate = new Date(date.setDate(date.getDate() + count));

  // let preDate = handlePreDate();
  // function handlePreDate() {
  //   let str = "";
  //   if (count > 0) {
  //     str = count * step + " days from today is ";
  //   } else if (count < 0) {
  //     str = count * step * -1 + " days ago was ";
  //   } else {
  //     str = "Today is ";
  //   }
  //   return str;
  // }

  return (
    <div>
      <div>
        <button onClick={handleStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>

      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <p>
        {/* {preDate} */}
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
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
