import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <button className="minus" onClick={() => dispatch(decNumber())}>
          -
        </button>
        <input
          type="text"
          name="quantity"
          className="quantity_input"
         
          value={myState}
        />
        <button className="plus" onClick={() => dispatch(incNumber(5))}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
