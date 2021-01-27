import React, { useState, useContext } from "react";
import { ContextSetShow, ContextShowData } from "../App/App";
import "./header.css";

export default function Header2() {
  const [value, setValue] = useState("");
  const [text, setText] = useState(""); 
  const setShow = useContext(ContextSetShow)
  const showData = useContext(ContextShowData)

  const addText = (e) => {
    setValue(e.target.value);
  };

  const addText2 = (e) => {
    setText(e.target.value);
  };

  const sendReq = () => {
    if (value.trim() === "" || text.trim() === "") {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    } else {
      showData(value, text);
      setValue("");
      setText("");
    }
  };

  const sendOnEnter = (e) => {
    if (e.key === "Enter") {
      sendReq();
    }
  };


  return (
    <div>
      <input
        className="input-style"
        type="text"
        value={text}
        onChange={addText2}
        onKeyPress={sendOnEnter}
      />

      <input
        className="input-style"
        type="text"
        value={value}
        onChange={addText}
        onKeyPress={sendOnEnter}
      />
      <button className="button-style" onClick={sendReq}>
        Send
      </button>
    </div>
  );
}
