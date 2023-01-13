function Html(props) {
  return (
    <div className="html">
      <textarea
        className="code"
        value={props.value}
        onChange={props.handler}
        placeholder="html..."
      ></textarea>
    </div>
  );
}
export default Html;
