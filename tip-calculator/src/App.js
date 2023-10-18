import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  return (
    <div>
      <Bill bill={bill} setBill={setBill}></Bill>
      <Rating tip={myTip} onSelect={setMyTip}>
        How did you like the service?
      </Rating>
      <Rating tip={friendTip} onSelect={setFriendTip}>
        How did your friend like the service?
      </Rating>
      {bill > 0 && (
        <>
          <Total bill={bill} myTip={myTip} friendTip={friendTip}></Total>
          <Reset
            resetBill={setBill}
            resetmyTip={setMyTip}
            resetFriendTip={setFriendTip}
          ></Reset>
        </>
      )}
    </div>
  );
}

function Bill({ bill, setBill }) {
  const handleBillChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setBill(value);
    } else {
      setBill("");
    }
  };

  return (
    <div>
      How much was the bill?
      <input
        type="numeric"
        value={bill}
        onChange={handleBillChange}
        placeholder=""
      ></input>
    </div>
  );
}

function Rating({ tip, onSelect, children }) {
  const handleOptionChange = (e) => {
    onSelect(parseFloat(e.target.value));
  };

  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={handleOptionChange}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, myTip, friendTip }) {
  const tipValue = Math.round(bill * ((myTip + friendTip) / 2) * 10) / 10;
  const totalBill = bill + tipValue;

  return (
    <div>
      <h3>
        You pay ${totalBill}(${bill} + ${tipValue} tip)
      </h3>
    </div>
  );
}

function Reset({ resetBill, resetmyTip, resetFriendTip }) {
  const resetValues = () => {
    resetBill("");
    resetmyTip(0);
    resetFriendTip(0);
  };
  return (
    <div>
      <button onClick={resetValues}>Reset</button>
    </div>
  );
}
