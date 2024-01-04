import React from "react" // This refers react inside Node module
import ReactDOM from "react";


  /* <div id="parent">
    <div id="child">
        <h1>Hello World 1</h1>
         <h1>Hello World 2</h1>
    </div>
</div> */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  [
    React.createElement("h1", {}, "Hello world 1"),
    React.createElement("h1", {}, "Hello world 2"),
  ]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is a  Namaste React JS Series"
// );
// console.log(heading); This is a object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
