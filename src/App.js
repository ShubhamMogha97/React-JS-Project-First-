
import React from "react"; // This refers react inside Node module
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";  // Named export
import Body from "./components/Body"; // Export default

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>s
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
