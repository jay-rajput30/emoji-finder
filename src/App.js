import React, { useState } from "react";
import "./styles.css";

let emojis = {
  "😃": "smile",
  "😂": "laugh",
  "☹️": "sad",
  "😣": "disgust",
  "🤯": "shock"
};

let emojiKey = Object.keys(emojis);

export default function App() {
  let [meaning, setMeaning] = useState("translation will appear here");
  // let [emo, setEmo] = useState("");

  function clickHandler(emoji) {
    setMeaning(emojis[emoji]);
  }
  function onInputChange(event) {
    let emoticon = event.target.value;
    // setEmo(emoticon);

    if (emoticon in emojis) {
      setMeaning(emojis[emoticon]);
    } else {
      setMeaning("Failed to detect the object");
    }
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "#F59E0B",
          color: "white",
          padding: "1rem",
          width: "100%",
          marginBottom: "2rem".anchor,
          position: "fixed",
          top: "0"
        }}
      >
        Emoji finder
      </h1>
      <input
        style={{
          padding: "1rem",
          textAlign: "center",
          margin: "2rem auto",
          border: "2px solid #F59E0B"
        }}
        onChange={onInputChange}
      ></input>
      <h3 style={{ marginBottom: " 2rem" }}>{meaning}</h3>
      <h4 style={{ marginBottom: "1rem" }}>Emojis we know</h4>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        {emojiKey.map((emo) => {
          return (
            <li
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
              onClick={() => clickHandler(emo)}
            >
              {emo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
