import React, { useReducer, useState } from "react";

function todoreducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id == action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
  }
}

export function TodoApp() {
  const [todos, dispatch] = useReducer(todoreducer, []);
  const [state, setState] = useState("");

  return (
    <>
      <input
        type="text"
        value={state}
        placeholder="enter the task"
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "ADD", payload: state })}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "20px",
              }}
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              Del
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
