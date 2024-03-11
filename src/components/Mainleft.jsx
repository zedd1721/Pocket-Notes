import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styled from "./Mainleft.module.css";
import Modal from "./Modal";

function Mainleft({ clickAdd, showModal, setShowModal }) {
  const [groupStore, setGroupStore] = useState(
    JSON.parse(localStorage.getItem("groupStore")) || []
  );

  const addData = (groupname) => {
    console.log("Adding data", groupname);
    setGroupStore((prev) => {
      const localGroup = [...prev, groupname];
      localStorage.setItem("groupStore", JSON.stringify(localGroup));
      return localGroup;
    });
  };

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

  return (
    <>
      <div className={styled.container}>
        {/* HEADING */}
        <div className={styled.header}>
          <h1 className={styled.heading}>Pocket Notes</h1>
        </div>
        {/* groups */}
        <div className={styled.groups}>
          {groupStore.map((group, index) => {
            return (
              <div className={styled.demogroup} key={index}>
                <div
                  className={styled.profileimg}
                  style={{ backgroundColor: group.selectedColor }}
                >
                  <h1>{generateImg(group.name)}</h1>
                </div>
                <div className={styled.noteName}>
                  <h1>{group.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
        {/* Notes Add Button */}
        <div className={styled.addbtn}>
          <IoMdAddCircle color="#16008B" size={80} onClick={clickAdd} />
        </div>
      </div>
      {showModal && (
        <Modal modalClose={() => setShowModal(false)} addData={addData} />
      )}
    </>
  );
}

export default Mainleft;
