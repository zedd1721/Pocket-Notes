import React, { useRef, useState } from "react";
import "./Modal.css";
function Modal({ modalClose }) {
  const containerout = useRef();

  const close = (e) => {
    console.log(e.target);
    console.log(containerout.current);
    if (e.target === containerout.current) {
      modalClose();
    }
  };

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
  const [groupname, setGroupname] = useState({
    name: "",
    selectedColor: "",
  });
  //   const [errors, setErrors] = useState({
  //     name:null,
  //     selectedColor: null,
  //   });

  const handleName =  (event) => {
    console.log(event.target.value);
    setGroupname({ ...groupname, name: event.target.value });
  };
  const handleColor = (color) => {
    console.log(color);
    setGroupname({ ...groupname, selectedColor: color });
  };

  return (
    <div className="container" ref={containerout} onClick={close}>
      <div className="popup">
        <h1>Create New group</h1>
        <div className="nameinput">
          <h2>Group Name</h2>
          <input
            type="text"
            placeholder="Enter group name"
            value={groupname.name}
            name="name"
            onChange={handleName}
          />
        </div>
        <div className="colorchoose">
          <h2>Choose colour</h2>
          <div className="colors">
            {colors.map((color, index) => {
              return (
                <div
                  className="notescolor"
                  style={{ backgroundColor: color }}
                  key={index}
                  onClick={() => handleColor(color)}
                ></div>
              );
            })}
          </div>
        </div>
        <button>Create</button>
      </div>
    </div>
  );
}

export default Modal;
