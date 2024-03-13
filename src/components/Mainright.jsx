import React from "react";
import styled from "./Mainright.module.css";
import Box from "./Box";
import { IoMdLock } from "react-icons/io";

function Mainright({ groupStore,setGroupStore, showBox, setNotesList, notesList, selectedGroup }) {
  // const groupId = groupStore.map((group)=>group.id);
  // const notesId = notesList.map((notes)=>notes.notesId);
  // const selected = notesList.some((notes) => selectedGroup === notes.notesId);

  return (
    <div className={styled.container}>
      {showBox  ? (
        <Box groupStore={groupStore} setGroupStore={setGroupStore} setNotesList={setNotesList} notesList={notesList} selectedGroup={selectedGroup} />
      ) : (
        <div className={styled.wrapper} style={{ backgroundColor: "#dae5f5" }}>
          <img src="./bgimg.png" alt="" />
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
          <div className={styled.encry}>
            <IoMdLock /> <p>end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mainright;
