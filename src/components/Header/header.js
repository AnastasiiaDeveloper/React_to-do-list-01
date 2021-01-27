import React, { Component } from "react";
import  "./header.css"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  addText = (e) => {
    this.setState({ value: e.target.value });
   
  };
  
  

  sendReq = () => {
    console.log(this.state.value);
    this.setState({ value: " "});
  };

  sendOnEnter = (e) => {
    if (e.key === "Enter") {
      this.sendReq();
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <input className ="input-style"
          type="text"
          value={value}
          onChange={this.addText}
          onKeyPress={this.sendOnEnter}
        />
        <button className="button-style" onClick={this.sendReq}>Send</button>
      </div>
    );
  }
}
export default Header;
