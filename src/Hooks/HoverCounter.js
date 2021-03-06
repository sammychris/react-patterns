import useCounter from "./useCounter";

const HoverCounter = () => {
  const { counter, onCounter } = useCounter();
  return (
    <div className="hover" onMouseOver={onCounter}>
      <h2>Hovered {counter} times</h2>
    </div>
  );
};

export default HoverCounter;
