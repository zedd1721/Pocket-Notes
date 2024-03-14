import React from "react";
import styled from "./Mainright.module.css";
import Box from "./Box";
import { IoMdLock } from "react-icons/io";

function Mainright({ groupStore,setGroupStore, showBox, selectedGroup }) {


  return (
    <div className={styled.container}>
      {showBox  ? (
        <Box groupStore={groupStore} setGroupStore={setGroupStore} selectedGroup={selectedGroup} />
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
