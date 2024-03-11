import React, { useState } from "react";
import styled from "./Box.module.css";
import { IoSend } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

function Box() {
  const [noteText, setNoteText] = useState("");
  function handleSend() {
    console.log(noteText);
    console.log("Disabled: ", !noteText.trim().length);
    if (noteText.trim().length > 0) {
    }
  }

  return (
    <div className={styled.container}>
      <div className={styled.heading}>
        <div
          className={styled.profileimg}
          style={{ backgroundColor: "rgb(102, 145, 255)" }}
        >
          <h1>JN</h1>
        </div>
        <div className={styled.noteName}>
          <h1>JS Notes</h1>
        </div>
      </div>
      <div className={styled.noteArea}>
        <div className={styled.notesDisplay}>
          <div className={styled.notes}>
            <p>
              Another productive way to use this tool to begin a daily writing
              routine. One way is to generate a random paragraph with the
              intention to try to rewrite it while still keeping the original
              meaning. The purpose here is to just get the writing started so
              that when the writer goes onto their day's writing projects, words
              are already flowing from their fingers.
            </p>
            <div className={styled.datentime}>
              9 mar 2019 &nbsp;
              <BsDot size={30} />
              &nbsp; 8:37 am
            </div>
          </div>
        </div>
        <div className={styled.typeArea}>
          <textarea
            name="notesarea"
            placeholder="Enter your text here..........."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          <button onClick={handleSend} disabled={!noteText.trim().length}>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
