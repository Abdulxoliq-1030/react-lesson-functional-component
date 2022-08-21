import React, { useReducer } from "react";
import CompA from "./components/comp-a";
import CompB from "./components/comp-b";
import CompC from "./components/comp-c";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <h1>Count - {count}</h1>
      <CompA />
      <CompB />
      <CompC />
    </CountContext.Provider>
  );
}

export default App;
