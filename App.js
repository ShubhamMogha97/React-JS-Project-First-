import React from "react"; // This refers react inside Node module
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is a Heading"
);
// React Element
const Element = <span>React Element</span>

// React Element
const NewEle = <span>React New Element
  {Element}
</span>

// React Component
const Title=()=>{
  return(
    <div>
      <h3>Title componnet in React JS</h3>
    </div>
  )
}

// const jsxHeading = <h1>Hello world</h1>;
// console.log(jsxHeading);

// Class component
// Functional component


let number=1000;
const HeadingComponnet=()=>{
  return(
    <div id="conatiner">
        <Title/>
        {/* {Title()} same as </Title> */}
        {/* {NewEle} Element inside component */}
        <h4>Numbers is: {number}</h4>
        <h4>Calculation can be done: {10+10+6}</h4>
        {/* {heading} we can put react Element inside the component like this */}
        {console.log("Hello world")}
      <h2>Namaste React Functional Component</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponnet/>);
