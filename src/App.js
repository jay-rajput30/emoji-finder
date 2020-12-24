import React, { useState } from "react";
import "./styles.css";

let emojis = {
  "😃": "smile",
  "😂": "laugh",
  "☹️": "sad",
  "😣": "disgust",
  "🤯": "shock",
  "😏": "smirk",
  "😅": "discomfort",
  "🤔": "Think",
  "🙄": "disapprove",
  "🥺": "plead",
  "💩": "shit",
  "😠": "angry"
};

let description = {
  "😃":
    "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.",
  "😂":
    "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing.",
  "☹️":
    "A classic sad face. A yellow face with simple, open eyes and wide, steep frown. May convey such feelings as moderate concern or disappointment and affectionate sadness, as when missing a loved one.",
  "😣":
    "A yellow face with a slight frown, furrowed eyebrows, and scrunched, X-shaped eyes, as if holding back tears or exerting great effort. May convey various degrees and tones of frustration, sadness, helplessness, and struggle. Facebook’s design features a light-purple forehead.",
  "🤯":
    "A yellow face with an open mouth, the top of its head exploding in the shape of a brain-like mushroom cloud. A visual form of the expression mind blown, it may represent such emotions as shock, awe, amazement, and disbelief.",
  "😏":
    "A yellow face with a sly, smug, mischievous, or suggestive facial expression. It features a half-smile, raised eyebrows, and eyes looking to the side. Often used to convey flirtation or sexual innuendo.",
  "😅":
    "Has the same grin and eyes as 😄 Grinning Face With Smiling Eyes but with a single, blue bead of sweat, usually over its left eye. Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead. ",
  "🤔":
    "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone, as if saying Hmm, I don't know about that. Tone varies, including earnest, playful, puzzled, skeptical, and mocking.",
  "🙄":
    "A yellow face with a small, closed mouth, flat or frowning, rolling its large, white eyes upwards. As with the gesture of an eye-roll, commonly conveys moderate disdain, disapproval, frustration, or boredom. Tone varies, including playful, sassy, resentful, and sarcastic, as if saying Yeah, whatever.",
  "🥺":
    "A yellow face with furrowed eyebrows, a small frown, and large, “puppy dog” eyes, as if begging or pleading. May also represent adoration or feeling touched by a loving gesture",
  "💩": `May be used to represent feces and other bathroom topics as well as stand in for their many related slang terms. It also enjoys a wide range of idiosyncratic applications, such as conveying a sense of whimsy or silliness, given its fun, happy expression.`,
  "😠": `A yellow face with a frowning mouth and eyes and eyebrows scrunched downward in anger. Conveys varying degrees of anger, from grumpiness and irritation to disgust and outrage. May also represent someone acting tough or being mean`
};

let emojiKey = Object.keys(emojis);

export default function App() {
  let [meaning, setMeaning] = useState("");
  let [desc, setDesc] = useState("");
  // let [emo, setEmo] = useState("");

  function clickHandler(emoji) {
    setMeaning(emojis[emoji]);
    setDesc(description[emoji]);
  }
  function onInputChange(event) {
    let emoticon = event.target.value;
    // setEmo(emoticon);

    if (emoticon in emojis) {
      setMeaning(emojis[emoticon]);
    } else {
      setMeaning(
        "Strange I didnt find that value..Did you enter a text as input🤔?"
      );
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
          marginBottom: "2rem",
          position: "fixed",
          top: "0",
          height: "5rem"
        }}
      >
        Emoji finder
      </h1>
      <input
        style={{
          padding: "1rem",
          textAlign: "center",
          marginTop: "8rem",
          border: "2px solid #F59E0B"
        }}
        onChange={onInputChange}
      ></input>
      <h3
        style={{
          margin: " 2rem",
          textTransform: "uppercase",
          color: "#e27b11"
        }}
      >
        {meaning}
      </h3>
      <h3 style={{ marginBottom: "1rem", color: "#e27b11" }}>Emojis we know</h3>
      <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap" }}>
        {emojiKey.map((emo) => {
          return (
            <li
              style={{
                margin: "0.5rem",
                cursor: "pointer",
                fontSize: "2rem",
                filter: "drop-shadow(0 0 0.4rem orangered)"
              }}
              onClick={() => clickHandler(emo)}
            >
              {emo}
            </li>
          );
        })}
      </ul>
      <span style={{ margin: "1rem" }}>{desc}</span>
    </div>
  );
}
