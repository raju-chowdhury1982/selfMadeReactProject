//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(<h1>Welcom to React!</h1>, document.getElementById("root"));

//normal vanila js code to put an element to the page
const h2 = document.createElement("h2");
h2.innerText = "Hello! Raju";
document.getElementById("root").appendChild(h2);
