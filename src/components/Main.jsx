import React from "react";
import Mainleft from "./Mainleft";
import Mainright from "./Mainright";
import { useMediaQuery } from "@mui/material";
import Box from "./Box";
import { useState, useEffect } from "react";

function Main() {
  const isMobile = useMediaQuery("(max-width:450px)");
  const [display, setDisplay] = useState("block");
  const [displayBox, setDisplayBox] = useState("none");

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
      notesData: [],
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
      {isMobile ? (
        <>
          <Mainleft
            clickAdd={handlemodal}
            showModal={showModal}
            setShowModal={setShowModal}
            groupStore={groupStore}
            setGroupStore={setGroupStore}
            addData={addData}
            showBox={showBox}
            setShowBox={setShowBox}
            selectedGrouP={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            displayBox={displayBox}
            setDisplayBox={setDisplayBox}
            display={display}
            setDisplay={setDisplay}
          />

          <Box
            groupStore={groupStore}
            setGroupStore={setGroupStore}
            selectedGroup={selectedGroup}
            displayBox={displayBox}
            setDisplayBox={setDisplayBox}
            display={display}
            setDisplay={setDisplay}
          />
        </>
      ) : (
        <>
          <Mainleft
            clickAdd={handlemodal}
            showModal={showModal}
            setShowModal={setShowModal}
            groupStore={groupStore}
            setGroupStore={setGroupStore}
            addData={addData}
            showBox={showBox}
            setShowBox={setShowBox}
            selectedGrouP={selectedGroup}
            setSelectedGroup={setSelectedGroup}
          />

          <Mainright
            groupStore={groupStore}
            setGroupStore={setGroupStore}
            showBox={showBox}
            selectedGroup={selectedGroup}
          />
        </>
      )}
    </main>
  );
}

export default Main;
