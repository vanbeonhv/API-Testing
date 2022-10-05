import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, increaseByAmount } from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncreaseClick = () => {
    const action = increase(); //action creator
    // console.log(action);
    dispatch(action);
  };
  const handleDecreaseClick = () => {
    const action = decrease(); //action creator
    dispatch(action);
  };
  const handleIncreaseByAmountClick = () => {
    const action = increaseByAmount(2);
    //action creator
    console.log(action);
    dispatch(increaseByAmount(2));
  };
  return (
    <div>
      <p>Counter: {count}</p>
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
        <button onClick={handleIncreaseByAmountClick}>IncreaseByAmount</button>
      </div>
    </div>
  );
}

export default CounterFeature;
