import React from "react";
import styled from "./Mainright.module.css";
import { IoMdLock } from "react-icons/io";

function Mainright() {
  return (
    <div className={styled.container}>
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
  );
}

export default Mainright;
