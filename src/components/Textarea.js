import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Empty text Now!");

  // console.log("Upper case wala button click vayo");
  const Clicked = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  //text lai clear garne method yo chai

  const Clear = () => {
    var c = "";

    setText(c);
  };
  //text lai reverse garne function yo chai
  const Reverse = () => {
    var givenText = text;
    var arr = givenText.split(" ");

    var reverse_array = arr.reverse();

    var original_string_comma = reverse_array.join(" "); //comma separetaed string return garxa

    var newReverserText = original_string_comma.toString();

    // console.log(newReverserText)

    setText(newReverserText);
  };

  // **************************************************

  // text to speech

  function speak(){

    // Check if the browser supports the speech synthesis API
    if ("speechSynthesis" in window) {
      // Create a new instance of the SpeechSynthesisUtterance object
      const message = new SpeechSynthesisUtterance();

      // Set the text that you want to convert to speech
      message.text = "Hello, how are you today?";

      // Choose the voice that you want to use (optional)
      // message.voice = speechSynthesis.getVoices()[0];

      // Choose the speech rate (optional)
      // message.rate = 0.7;

      // Choose the pitch (optional)
      // message.pitch = 1.2;

      // Call the speech synthesis function to convert text to speech
      window.speechSynthesis.speak(message);
    } else {
      // If the browser doesn't support the speech synthesis API, show an error message
      console.log("Sorry, your browser doesn't support text to speech!");
    }
  };

  // **************************************************************

  const LowerCase = () => {
    const newTextlower = text.toLocaleLowerCase();
    setText(newTextlower);
  };

  //Onchange wala event le garda everytime text ko value update hunxa yeha
  const onChangeFxn = (e) => {
    console.log("Onchange event fire vayo hai guys!!!");
    setText(e.target.value); //imp**
  };

  return (
    <>
      <div className="container bg-dark p-10 my-4 rounded">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white mt-2"
          >
            Timro Subha Name
          </label>
          <input
            type="Text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Suman Sharma"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-white"
          >
            {props.topic}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={onChangeFxn}
          ></textarea>
        </div>
        <button className="btn btn-primary m-3" onClick={Clicked}>
          UpperCase
        </button>
        <button className="btn btn-info m-3" onClick={Clear}>
          Clear Text
        </button>
        <button className="btn btn-warning m-3" onClick={Reverse}>
          Reverse
        </button>
        <button className="btn btn-danger m-3" onClick={LowerCase}>
          LowerCase
        </button>
        <button className="btn btn-danger m-3" onClick={speak}>
          Speak:)
        </button>
      </div>

      <div className="container">
        <h2>Your text Summary</h2>
        <hr />
        <h3>
          No of character= {text.length} <br /> <hr /> And No of words=
          {text.split(" ").length}
        </h3>
        <hr />
        <h3>Time to Read ={0.00333 * 60 * text.split(" ").length} Sec </h3>
      </div>
    </>
  );
}
