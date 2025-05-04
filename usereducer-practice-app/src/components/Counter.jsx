import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>Count:{state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
      </div>
    </>
  );
}
