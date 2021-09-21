import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🤣": "Rolling on the Floor Laughing",
  "😇": "Smiling face with Halo",
  "😍": "Smiling face with Heart-Eyes",
  "❤️": "Red Heart",
  "🤗": "Huggin face",
  "😪": "Sleepy face",
  "😏": "Smirking face",
  "😒": "Unamused face",
  "✌️": "Victory hand",
  "🤡": "Clown face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function changeEventHandler(item) {
    var userInput = item.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtttt</h1>
      <input onChange={changeEventHandler}></input>
      <div>
        <h3>{meaning}</h3>
        <div>
          <h3>
            {emojiWeKnow.map((emoji) => {
              return (
                <span
                  onClick={() => emojiClickHandler(emoji)}
                  style={{
                    fontSize: "2rem",
                    padding: "0.5rem",
                    cursor: "pointer"
                  }}
                  key={emoji}
                >
                  {emoji}
                </span>
              );
            })}
          </h3>
        </div>
      </div>
    </div>
  );
}
