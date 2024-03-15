import React, { useState } from "react";
import styled from "./Box.module.css";
import { IoSend } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useMediaQuery } from "@mui/material";
import moment from "moment";

function Box({
  groupStore,
  setGroupStore,
  displayBox,
  setDisplayBox,
  selectedGroup,
  display,
  setDisplay,
}) {
  // const isMobile = useMediaQuery("(max-width:450px)");
  // console.log(isMobile);
  const handleClick = () => {
    setDisplayBox("none");
    setDisplay("block");
  };

  const [noteText, setNoteText] = useState("");

  const dateFormat = () => {
    const date = moment().format(" D MMM YYYY");
    return `${date}`;
  };
  const timeFormat = () => {
    const time = moment().format("LT");
    return `${time} `;
  };
  function handleSend() {
    // Finding the group in groupStore with the matching ID
    const updatedGroupStore = groupStore.map((group) => {
      if (group.id === selectedGroup) {
        // If the group matches, update its notesData property
        group.notesData.push({
          text: noteText,
          dateNotes: dateFormat(),
          timeNotes: timeFormat(),
        });
        return {
          ...group,
        };
      }
      // console.log("I am here");
      return group;
    });
    setGroupStore(updatedGroupStore);
    localStorage.setItem("groupStore", JSON.stringify(groupStore));
    setNoteText("")
  }

  return (
    <div className={styled.container} style={{ display: displayBox }}>
      {groupStore
        .filter((groups) => groups.id === selectedGroup)
        .map((group, index) => {
          return (
            <div className={styled.wrapper}>
              <div className={styled.heading} key={index}>
                <div className={styled.backonMobile} onClick={handleClick}>
                  <IoMdArrowRoundBack size={25} color="white" />
                </div>
                <div
                  className={styled.noteImg}
                  style={{ backgroundColor: group.selectedColor }}
                >
                  <h1>{group.profile}</h1>
                </div>
                <div className={styled.noteHead}>
                  <h1>{group.name}</h1>
                </div>
              </div>

              <div className={styled.noteArea}>
                <div className={styled.notesDisplay}>
                  {group.notesData.map((note, index) => {
                    return (
                      <div className={styled.notes} key={index}>
                        <p>{note.text}</p>
                        <div className={styled.datentime}>
                          {note.dateNotes}
                          &nbsp;
                          <BsDot size={30} />
                          &nbsp; {note.timeNotes}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styled.typeArea}>
                  <textarea
                    name="notesarea"
                    placeholder="Enter your text here..........."
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                  ></textarea>
                  <button
                    onClick={handleSend}
                    disabled={!noteText.trim().length}
                  >
                    <IoSend />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Box;
