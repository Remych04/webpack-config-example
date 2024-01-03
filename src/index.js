import { getUsers } from "./common/usersAPI";
import luxon from "luxon"
import "./style.css";


console.log("Hello webpack!");

getUsers().then(json => console.log(json));

// import React, { useState } from "react";
// import { render } from "react-dom";

// function App() {
//     const [state, setState] = useState("CLICK ME");

//     return <button onClick={() => setState("CLICKED")}>{state}</button>;
// }

// render(<App />, document.getElementById("root"));