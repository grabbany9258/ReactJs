import React, { useState } from "react";

const Colors = () => {
  const [color, setcolor] = useState("Red");

  return (
    <div className="col-sm-8">
      <h1>My Color is {color}</h1>

      <button className="btn btn-info" onClick={() => setcolor("Blue")}>
        Blue
      </button>
      <button
        className="btn btn-success mx-2"
        onClick={() => setcolor("Green")}
      >
        Green
      </button>
      <button className="btn btn-danger" onClick={() => setcolor("Red")}>
        Red
      </button>
    </div>
  );
};

export default Colors;
