import React, { useState } from "react";
import Html from "./component/Html";
import View from "./component/View";
import "./app.css";

function App() {
  const [html, setHtml] = useState("");

 function handleChange(e){
  
 }
  return (
    <div className="container">
      <Html value={html} handler={handleChange}/>
      <View />
    </div>
  );
}

export default App;
