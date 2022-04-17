import react, { useState } from "react";
import withCounter from "./withCounter";

const HoverCounter = () => {
  const { counter, onCounter } = withCounter();
  return (
    <div className="hover" onMouseOver={onCounter}>
      <h2>Hovered {counter} times</h2>
    </div>
  );
};

export default withCounter(HoverCounter);
