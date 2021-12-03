import react, { useState } from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
  const { counter, onCounter } = props;
  return (
    <button className="btn" onClick={onCounter}>
      Clicked {counter} times
    </button>
  );
};

export default withCounter(ClickCounter);
