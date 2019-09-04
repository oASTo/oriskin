import React, { Component } from "react";
import "./Booking.css";
import Button from "./Button";
import Numpad from "./Numpad";

function BookingCodeInput() {
  return (
    <>
      <div className="bookcode-container">
        <div className="code-head">Booking Code</div>
        <center>
          <div style={{flex:1,flexDirection:'row'}}>
        <input className="input" placeholder="123456" />
          <Button title="X" />
          </div>
          <Numpad /></center>
            
        
      </div>
    </>
  );
}

export default BookingCodeInput;
