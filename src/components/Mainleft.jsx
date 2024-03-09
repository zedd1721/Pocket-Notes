import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import styled from "./Mainleft.module.css";

function Mainleft( {clickAdd} ) {
  return (
    <>
    <div className={styled.container}>
      {/* HEADING */}
      <div className={styled.header}>
        <h1 className={styled.heading}>Pocket Notes</h1>
      </div>

      {/* Notes Add Button */}
      <div className={styled.addbtn}>
        <IoMdAddCircle color="#16008B" size={80} onClick={clickAdd}/>
      </div>
    </div>
    
    </>
  );
}

export default Mainleft;
