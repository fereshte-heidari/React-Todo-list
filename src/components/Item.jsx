import React, { useState } from "react";

function Item(props) {
  const [done, setDone] = useState(false);

  function handleStyle() {
    setDone(true);
  }
  return (
    <li
      onClick={handleStyle}
      style={done ? { textDecoration: "line-through" } : null}
    >
      {props.items}
    </li>
  );
}

export default Item;
