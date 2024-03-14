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



  const addData = (groupname) => {
    const groupProfile = {
      ...groupname,
      profile: generateImg(groupname.name),
      id: Date.now(),
      //Make an array with note Objects
      notesData: []
    };
    

    setGroupStore((prev) => {
      const localGroup = [...prev, groupProfile];
      localStorage.setItem("groupStore", JSON.stringify(localGroup));
      return localGroup;
    });


    
  
  };

  const handlemodal = () => {
    setShowModal(true);
  };
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
 
      />

      <Mainright
        groupStore={groupStore}
        setGroupStore={setGroupStore}
        showBox={showBox}

        selectedGroup={selectedGroup}
      />
    </main>
  );
  }

export default Main;
