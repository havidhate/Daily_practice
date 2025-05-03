import React from "react";
import { Counter } from "./Counter";
import { DataProvider } from "./DataProvider"; // Make sure to import the provider
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Counter />
    </DataProvider>
  );
}

export default App;
