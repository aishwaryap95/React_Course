import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("clicked" + text);
    let newtxt = text.toUpperCase();
    setText(newtxt);
  };

  const handleLowerClick = () => {
    console.log("clicked" + text);
    let newtxt = text.toLowerCase();
    setText(newtxt);
  };

  const handleOnChange = (event) => {
    console.log("clicked change");
    setText(event.target.value);
  };

  const copyToClipboard = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" my-3>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleOnChange}
            value={text}
            className="form-control"
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={copyToClipboard}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container" my-3>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
