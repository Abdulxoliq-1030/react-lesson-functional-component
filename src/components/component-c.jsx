import React from "react";
import { userContext, channelContext } from "../app";

export default function ComponentC() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <channelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context value {user}, channel name {channel}
                  </div>
                );
              }}
            </channelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}
