import React from "react";
import ComponentA from "./components/component-a";

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <>
      <userContext.Provider value={"Abdulxoliq"}>
        <channelContext.Provider value={"Odiljonov"}>
          <ComponentA />
        </channelContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
