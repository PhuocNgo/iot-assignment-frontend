import React from "react";
import "./globalStyle.css";

function GlobalStyle({ children }) {
  return React.Children.only(children);
}

export default GlobalStyle;
