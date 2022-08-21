import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <>
      {text} - {count}
    </>
  );
}

export default React.memo(Count);
