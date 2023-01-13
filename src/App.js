import React,{useState} from "react";
import Main from "./component/Main";
import "./app.css";

function App() {
const [html,setHtml]=useState("")
const [css,setCss]=useState("")
const [javascript,setJavascript]=useState("")

  return (
    <>
    <Main/>
    </>
  );
}

export default App;