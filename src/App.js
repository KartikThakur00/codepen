import React, { useState } from "react";
import Html from "./component/Html";
import View from "./component/View";
import "./app.css";

function App() {
  const [html, setHtml] = useState("");

  function handleChange(e) {
    setHtml(e.target.value);
  }
  console.log(html);
  return (
    <div className="container">
      <Html value={html} handler={handleChange} />
      <View value={html} />
    </div>
  );
}

export default App;
