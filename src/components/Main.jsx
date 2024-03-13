import React from "react";
import Mainleft from "./Mainleft";
import Mainright from "./Mainright";
import { useState } from "react";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const [groupStore, setGroupStore] = useState(
    JSON.parse(localStorage.getItem("groupStore")) || []
  );

  const [showBox, setShowBox] = useState(false);

  const [selectedGroup, setSelectedGroup] = useState(null);

  const [notesList, setNotesList] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  // const handleAddNoteId = (note) => {
  //   setNotesList((prev) => {
  //     if(prev.includes(note)) return prev;
  //     else return [...prev, note];
  //   })
// }


  const generateImg = (name) => {
    const word = name.split(" ");
    //If it is a single word
    let firstletter = word[0].charAt(0).toUpperCase();
    //if it is more then 1 word
    if (word.length > 1) {
      firstletter += word[1].charAt(0).toUpperCase();
    }
    return firstletter;
  };


  // console.log(selectedGroup);
  const addData = (groupname) => {
    const groupProfile = {
      ...groupname,
      profile: generateImg(groupname.name),
      id: Date.now(),
      //Make an array with note Objects
    };
    

    setGroupStore((prev) => {
      const localGroup = [...prev, groupProfile];
      localStorage.setItem("groupStore", JSON.stringify(localGroup));
      return localGroup;
    });

    // selectedGroup = groupStore.map((group) =>(group.id))
    // setNotesList((prev) => {
    //   return [...prev, { notesId: selectedGroup }];
    // });
    
  
  };
  console.log("NotesId: ", notesList);

  const handlemodal = () => {
    setShowModal(true);
  };
  // console.log("ID: ", selectedGroup);
  return (
    <main>
      <Mainleft
        clickAdd={handlemodal}
        showModal={showModal}
        setShowModal={setShowModal}
        groupStore={groupStore}
        addData={addData}

        showBox={showBox}
        setShowBox={setShowBox}
        setSelectedGroup={setSelectedGroup}
        setNotesList={setNotesList}

        // handleAddNoteId={handleAddNoteId}  
      />

      <Mainright
        groupStore={groupStore}
        setGroupStore={setGroupStore}
        showBox={showBox}
        setNotesList={setNotesList}
        notesList={notesList}

        selectedGroup={selectedGroup}
      />
    </main>
  );
  }

export default Main;
