import react, { useState } from "react";
import useCounter from "./useCounter";

const ClickCounter = (props) => {
  const { counter, onCounter } = useCounter();
  return (
    <button className="btn" onClick={onCounter}>
      Clicked {counter} times
    </button>
  );
};

export default ClickCounter;
