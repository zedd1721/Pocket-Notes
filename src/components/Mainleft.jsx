import React, { useState, useEffect } from "react";
import { IoMdAddCircle } from "react-icons/io";
import styled from "./Mainleft.module.css";
import Modal from "./Modal";
import Box from "./Box";

function Mainleft({
  clickAdd,
  showModal,
  setShowModal,
  groupStore,
  addData,

  setNotesList,
  setSelectedGroup,
  showBox,
  setShowBox,
  handleAddNoteId,
}) {
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
              <div
                className={styled.demogroup}
                key={index}
                onClick={() => {
                  setSelectedGroup(group.id), setShowBox(true);
                }}
              >
                <div
                  className={styled.profileimg}
                  style={{ backgroundColor: group.selectedColor }}
                >
                  <h1>{group.profile}</h1>
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
