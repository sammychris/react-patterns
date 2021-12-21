import { useState } from "react";

// this is a

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const onCounter = () => {
    setCounter(counter + 1);
  };

  return { counter, onCounter };
};

export default useCounter;
