import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const myState = {
    backgroundColor : "white",
    color : "black"
  }
  const myDarkState = {
    backgroundColor : "gray",
    color : "white"
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Case Conversion Successful","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower Case Conversion Successful","success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleChange1 = (event) => {
    setText1(event.target.value);
  };

  const wordCount = () => {
    if (text === '') {
      return 0;
    }
    return text.split(' ').length;
  };

  const highlightText = () => {
    // Create a temporary element to store the highlighted text
    const tempElement = document.createElement('div');
    tempElement.innerHTML = text;

    // Highlight all occurrences of text1 using a regular expression
    const regex = new RegExp(text1, 'gi'); // 'g' for global, 'i' for case-insensitive
    let highlightedText = tempElement.textContent.replace(regex, (match) => {
      return `<span style="background-color: yellow">${match}</span>`;
    });
    console.log(highlightedText);
    // Set the innerHTML of the textarea to the highlighted text
    document.getElementById('formGroupExampleInput').innerHTML = highlightedText;
  };

  const findText = () => {
    let index = text.indexOf(text1);
    if (index !== -1) {
        props.showAlert("Text has been found","success");
      highlightText(); // Call highlightText here to highlight all occurrences
    } else {
        props.showAlert("Text has not been found","danger");
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            style={props.mode==='dark'? myDarkState : myState}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={text}
            onChange={handleChange}
            placeholder="Enter your text here"
            rows={10}
          />
          <button className={`btn btn-${(props.mode === "dark" || props.mode=== "light") ? "primary": props.mode} my-3 mx-3` } onClick={handleUpClick}>
            Change to UpperCase
          </button>
          <button className={`btn btn-${(props.mode === "dark" || props.mode=== "light") ? "primary": props.mode} my-3 mx-3` } onClick={handleLoClick}>
            Change to LowerCase
          </button>
          <input
            style={props.mode==='dark'? myDarkState : myState}
            type="text"
            className="search my-3 mx-3"
            onChange={handleChange1}
            placeholder="Enter Text to be found"
          />
          <button className={`btn btn-${(props.mode === "dark" || props.mode=== "light") ? "primary": props.mode} my-3 mx-3` } onClick={findText}>
            Find this Text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary:</h1>
        <p>No. of Words: {wordCount()} and No. of Characters: {text.length}</p>
        <p>Reading Time: {0.008 * wordCount()} minutes</p>
      </div>
    </>
  );
}
