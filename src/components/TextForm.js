import React, { useState } from "react";
import "./TextForm.css";

const TextForm = (props) => {
  const changeHandler = (event) => {
    setText(event.target.value);
    //console.log(text);
  };

  const clickUpHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAleart("Converted to uppercase!", "success");
  };

  const clickLoHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAleart("Converted to lowercase!", "success");
  };

  const clickClearHandler = () => {
    setText("");
    props.showAleart("Text cleared", "success");
  };

  const clickTitleHandler = () => {
    var newText = text.split(" ");
    let nwtxt = newText.map((e) => e.charAt(0).toUpperCase() + e.substring(1));
    console.log(nwtxt.toString().replaceAll(",", " "));
    setText(nwtxt.toString().replaceAll(",", " "));
    props.showAleart("Converted to title case!", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3 textbox">
        <h1 id="hd">{props.heading}</h1>
        <textarea
          className={`form-control`}
          id="myBox"
          value={text}
          onChange={changeHandler}
          rows="8"
        ></textarea>
      </div>

      <button disabled={text.length===0} className="btn btn-primary but my-2 " onClick={clickUpHandler}>
        Convert to UpperCase
      </button>
      <button  disabled={text.length===0} className="btn btn-primary but mx-2 my-2" onClick={clickLoHandler}>
        Convert to LowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary but mx-2 my-2" onClick={clickTitleHandler}>
        Title Case
      </button>
      <button disabled={text.length===0} className="btn btn-primary but mx-2 my-2" onClick={clickClearHandler}>
        Clear
      </button>

      <div className="card bg-light mb-3 my-4">
        <div className="card-header " style={{ overflow: "auto" }}>
          <h4>
            {text.split(" ").filter(e => e.length!==0).length } words {text.length} characters{" "}
            {text.split("\n").length} paragraphs{" "}
            {0.008 * (text.split(" ").filter(e => e.length!==0).length )} minutes to read
          </h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Text Preview</h5>
          {/* <textarea className="form-control" value={text} rows={8}></textarea> */}
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
