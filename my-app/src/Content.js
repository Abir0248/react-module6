import React, { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleClick = () => {
    setDisplayText(text);
  };

  return (
    <main>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
      <button onClick={handleClick}>Display Text</button>
      <p>{displayText}</p>
    </main>
  );
};

export default Content;
