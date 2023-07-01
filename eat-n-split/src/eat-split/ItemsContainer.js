import { useState } from "react";
import Items from "./Items";
import AddItem from "./AddItem";
import SplitContainer from "./SplitContainer";
export default function ItemsContainer() {
  const [data, setData] = useState([]);
  const [splitter, setSplitter] = useState("");

  return (
    <>
      {data.length === 0 ? (
        <div className="no-frnds">Please add friends to split the bill</div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="data-container">
          <Items persons={data} splitter={splitter} setSplitter={setSplitter} />
          <AddItem data={data} setData={setData} />
        </div>
        <div className="split-container">
          <SplitContainer
            data={data}
            setData={setData}
            splitter={splitter}
            setSplitter={setSplitter}
          />
        </div>
      </div>
    </>
  );
}
