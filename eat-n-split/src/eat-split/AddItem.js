import { useState } from "react";
import "./style.css";
export default function AddItem({ data, setData }) {
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
    if (name !== "") {
      setData([...data, { name: name, balance: 0 }]);
      setName("");
    }
  }
  return (
    <>
      <div className="add-item-div">
        {isClicked ? (
          <>
            <label>Add friend</label>
            <input
              className="add-item-input add-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </>
        ) : (
          ""
        )}

        <button className="add-item-btn" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
}
