// import React, { Component } from "react";
import React, { useState, useContext } from "react";
import {
  ContextFilterYourArray,
  ContextSetShow,
  ContextShowData,
} from "../App/App";
import "./filter.css";

export default function Filter() {
  const [value, setValue] = useState("");
  // const setShow = useContext(ContextSetShow)
  // const showData = useContext(ContextShowData)

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

// class Filter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: "",
//     };
//   }

//   addText = (e) => {
//     this.setState({ value: e.target.value });
//     // this.reset()
//     // this.setState({ value: " "});

//   };

//   sendReq = () => {
//     console.log(this.state.value);
//   };

//   sendOnAnySpace = () => {
//       this.sendReq();
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div>
//         <input className="input-style"
//           type="text"
//           value={value}
//           onChange={this.addText}
//           onKeyPress={this.sendOnAnySpace}
//         />
//         <button className="button-style" onClick={this.sendReq}>Find</button>
//       </div>
//     );
//   }
// }
// export default Filter;
