import React from "react"; // This refers react inside Node module
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is a Heading"
);

const jsxHeading = <h1>Hello world</h1>;
console.log(jsxHeading);

// Class component
// Functional component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
