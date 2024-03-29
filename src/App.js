import React from "react";
import oriskinlogo from "./oriskin-logo.png";
import "./App.css";
import BookingCodeInput from "./Booking/BookingCodeInput.js";

function App() {
  return (
    <>
      <div className="App">
        <div className="desc-flex">
          <div className="Desc">
            <img src={oriskinlogo} alt="oriskin logo" className="oriskin-logo" />
            <br />
            Use <br />
            the <b>SCANNER</b> <br />
            for easy Check-in
          </div>
        </div>
        <div className="book-flex">
          <BookingCodeInput />
        </div>
      </div>
    </>
  );
}

export default App;
