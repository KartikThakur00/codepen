function Html(props) {
  return (
    <div className="html">
      <textarea
        className="code"
        value={props.value}
        onChange={props.handler}
        autoCorrect="off"
        spellCheck='false'
        placeholder="<body>...    { inline css only }"
      ></textarea>
    </div>
  );
}
export default Html;
