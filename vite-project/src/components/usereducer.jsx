import React from "react";
import { useReducer } from "react";

import { reducer } from "./logic";
const initalstate = 0;

const Redus = () => {
  const [state, dispacth] = useReducer(reducer, initalstate);
  return (
    <>
      {" "}
      <div>{state}</div>
      <button onClick={() => dispacth({ type: "incriment" })}>
        {" "}
        incriment{" "}
      </button>
      <button onClick={() => dispacth({ type: "decrement" })}>decrement</button>
    </>
  );
};
export default Redus;
