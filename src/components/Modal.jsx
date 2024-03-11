import React, { useRef, useState } from "react";
import "./Modal.css";

function Modal({ modalClose, addData }) {
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
  const [errors, setErrors] = useState({
    name: null,
    selectedColor: null,
  });

  const handleName = (event) => {
    console.log(event.target.value);
    setGroupname({ ...groupname, name: event.target.value });
  };
  const handleColor = (color) => {
    console.log(color);
    setGroupname({ ...groupname, selectedColor: color });
  };

  const handleCreate = () => {
    let isError = false;
    // checking empty fields
    if (groupname.name.trim().length <= 0) {
      setErrors((prev) => ({ ...prev, name: "This cant be empty" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
    console.log(errors.name);
    if (groupname.selectedColor.length <= 0) {
      setErrors((prev) => ({
        ...prev,
        selectedColor: "Please select a color",
      }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, selectedColor: null }));
    }
    console.log(errors.selectedColor);
    console.log("Group Name:", groupname);

    if (!isError) {
      
      addData(groupname);
      modalClose();
    }
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
            onChange={handleName}
          />
        </div>
        {errors.name ? (
          <p className="errormsg" style={{ color: "red" }}>
            {errors.name}
          </p>
        ) : (
          ""
        )}
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
        {errors.selectedColor ? (
          <p className="errormsg" style={{ color: "red" }}>
            {errors.selectedColor}
          </p>
        ) : (
          ""
        )}
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default Modal;
