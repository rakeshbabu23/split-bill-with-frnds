import { useState } from "react";

export default function SplitContainer({
  splitter,
  setSplitter,
  data,
  setData,
}) {
  const [billValue, setBillValue] = useState(null);
  const [myExpense, setMyExpense] = useState(null);
  const [payBill, setPayBill] = useState("you");

  function handleBill(e) {
    e.preventDefault();
    if (payBill === "you") {
      const frnd = data.find((d) => d.name === splitter);
      frnd.balance = frnd.balance - (Number(billValue) - Number(myExpense));
      setData([...data]);
    } else {
      const frnd = data.find((d) => d.name === splitter);
      frnd.balance = frnd.balance + Number(myExpense);

      setData([...data]);
    }
    setBillValue("");
    setMyExpense("");
    setSplitter("");
  }

  return (
    <>
      {splitter ? (
        <>
          <h4>SPLIT A BILL WITH {splitter}</h4>
          <form className="form-box">
            <div className="form-item">
              <label>Bill value</label>
              <input
                className="form-input add-bill"
                value={billValue}
                onChange={(e) => setBillValue(e.target.value)}
              ></input>
            </div>
            <div className="form-item">
              <label>Your expense</label>
              <input
                className="form-input add-my-expense"
                value={myExpense}
                onChange={(e) => setMyExpense(e.target.value)}
              ></input>
            </div>
            <div className="form-item">
              <label>{splitter} expense</label>
              <input
                className="form-input"
                value={billValue - myExpense}
              ></input>
            </div>
            <div className="form-item">
              <label>Who's paying the bill</label>
              <select
                className="form-input select-frnd"
                onChange={(e) => setPayBill(e.target.value)}
              >
                <option value={payBill}>you</option>
                <option value={splitter}>{splitter}</option>
              </select>
            </div>
            <div className="form-item-btn">
              <button onClick={handleBill} className="add-item-btn split-btn">
                Split bill
              </button>
            </div>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
}
