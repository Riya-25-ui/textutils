import React,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    
    }
    const handleLoClick=()=>{
        // console.log("uppercase was clicked"+text);
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");
    
    }

    const clearText=()=>{
        // console.log("uppercase was clicked"+text);
        let newText ="";
        setText(newText)
        props.showAlert("text cleared","success");
    
    }
    const copyText=()=>{
        let text =document.getElementById("myBox");
        text.select ();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied to clipboared","success");
    
    }
    const extraSpaces=()=>{
        
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
       setText(event.target.value)
    }
    const[text,setText]= useState("");

  return (
   <>
  <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
    <h1 >{props.heading}</h1>
      <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case </button>
        <button className="btn btn-primary mx-2 mx-2" onClick={handleLoClick}>Convert to lower case </button>
        <button className="btn btn-primary mx-2 mx-2" onClick={clearText}>Clear text </button>
        <button className="btn btn-primary mx-2 mx-2" onClick={copyText}>Copy text </button>
        <button className="btn btn-primary mx-2 my-2" onClick={extraSpaces}>Remove extra spaces </button>
    </div>
    <div className="conatainer my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h2>Your text summary</h2>
        
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )}
