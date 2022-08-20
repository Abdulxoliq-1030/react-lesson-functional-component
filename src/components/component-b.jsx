import React, { useContext } from "react";
import ComponentC from "./component-c";
import { userContext, channelContext } from "../app";

export default function ComponentB() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div>
      {user} - {channel}
      <ComponentC />
    </div>
  );
}
