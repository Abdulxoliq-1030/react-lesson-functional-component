import React, { useContext } from "react";
import { userContext, channelContext } from "../app";

export default function ComponentC() {
  const user = useContext(userContext);
  const channel = useContext(channelContext);

  return (
    <div>
      User Context value {user}, channel name {channel}
    </div>
  );
}
