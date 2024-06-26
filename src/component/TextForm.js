import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleCopy = () => {
    // text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces Removed","success");
  };

  const [text, setText] = useState("");
  //text="new text2"; // wrong way to change the state
  //setText("new Text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          value={text}
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Upper Case
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
        Convert to Lower Case
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>

      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
