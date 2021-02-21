import React, { useState, useContext } from "react";
import { ContextFilterYourArray } from "../App/App";
import "./filter.css";

export default function Filter() {
  const [value, setValue] = useState("");
 
  const filterYourArray = useContext(ContextFilterYourArray);

  const changeValue = (e) => {
    setValue(e.target.value);
    filterYourArray(e.target.value);
  };

  return (
    <div>
      <input
        className="input-style"
        type="text"
        value={value}
        id="filter"
        onChange={changeValue}
      />
    </div>
  );
}
