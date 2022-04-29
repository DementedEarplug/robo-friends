import React from "react";

const Scrollable = ({ children }) => {
  return <div style={{ overflowY: "scroll", height: "80vh" }}>{children}</div>;
};

export default Scrollable;
