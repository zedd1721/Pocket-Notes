import React, { useState } from "react";
import styled from "./Box.module.css";
import { IoSend } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import moment from "moment";
//Send the selected Id as a para in the box

function Box({
  groupStore,
  setGroupStore,
  setNotesList,
  notesList,
  selectedGroup,
}) {
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
    if (noteText.trim().length > 0) {
      setNotesList((prev) => {
        const localNotes = [
          ...prev,
          {
            text: noteText,
            dateNotes: dateFormat(),
            timeNotes: timeFormat(),
            groupId: selectedGroup,
          }, //Add another parameter that tells me the group ID, ex: groupId: selectedgroup from line 8
        ];

        localStorage.setItem("notes", JSON.stringify(localNotes));
        return localNotes;
      });
      setNoteText("");
    }

    const openNote = groupStore.find((group) => group.id === selectedGroup);
    // Finding the group in groupStore with the matching ID
    const updatedGroupStore = groupStore.map((group) => {
      if (group.id === selectedGroup) {
        // If the group matches, update its notesData property
        return {
          ...group,
          notesData: [
            ...(group.notesData || []),
            {
              text: noteText,
              dateNotes: dateFormat(),
              timeNotes: timeFormat(),
            },
          ],
        };
      }
      return group;
    });
    setGroupStore(updatedGroupStore);
    localStorage.setItem("groupStore", JSON.stringify(groupStore));
    // const groupNotes = notesList.find((note) => note.groupId === selectedGroup);
    console.log("Filtered Group: ", groupStore);
    // console.log("Group Notes: ", groupNotes);
  }

  return (
    <div className={styled.container}>
      {groupStore.map((group, index) => {
        // I will not do map here...., get the Id which we will select, based on that Id render the component
        return (
          <div className={styled.heading} key={index}>
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
        );
      })}

      <div className={styled.noteArea}>
        <div className={styled.notesDisplay}>
          {notesList.map((note, index) => {
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
          <button onClick={handleSend} disabled={!noteText.trim().length}>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
