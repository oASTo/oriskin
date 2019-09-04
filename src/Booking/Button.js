import React, { Component } from "react";
import "./Booking.css";

export default function Button(props) {
  return (
    <>
      <div
        className={
          props.title === "X"
            ? "ButtonSquare-white"
            : props.title === "<" || props.title === "Print"
            ? "ButtonSquare-black"
            : "Button"
        }
      >
        <div
          className={
            props.title === "Print" ? "print-button-text" : "ButtonNum"
          }
        >
          {props.title}
        </div>
      </div>
    </>
  );
}
