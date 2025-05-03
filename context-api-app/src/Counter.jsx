import React, { useContext } from "react";
import { DataContext } from "./DataProvider";

export function Counter() {
  const { state, count } = useContext(DataContext);

  return (
    <div>
      <h2>Count: {state}</h2>
      <button onClick={count}>Increment</button>
    </div>
  );
}
