import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to UpperCase", "success")
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")
  }
  const handleClearClick = ()=>{
    let newText = ""
    setText(newText)
    props.showAlert("Clear the Text", "success")
  }
  const handleSpacesClick = ()=>{
    let newText = text.split(" ").join("")
    setText(newText)
    props.showAlert("Remove extra spaces", "success")
  }
  const handleCapitalizeClick = ()=>{
    let newText = (text[0].toUpperCase() + text.slice(1))
    setText(newText)
    props.showAlert("Capitalize the first letter in the word", "success")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
          </div>
          <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
          <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
          <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
          <button className='btn btn-primary mx-2' onClick={handleSpacesClick}>Remove extra spaces</button>
          <button className='btn btn-primary mx-2' onClick={handleCapitalizeClick}>Capitalize the first letter of word</button>    
      </div>
      <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.trim().length>0?text.trim().split(" ").length:0} words and {text.trim().length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
