import React, { Component } from "react";
import "./Booking.css";
import Numpad from "./Numpad";

export default class BookingCodeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    };
    this.clickhandle = this.clickhandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clickhandle = button => {
    if (button === "<") {
      console.log("masuk if <");
      this.backspace();
    } else if (button === "Print") {
      this.print();
    } else {
      this.setState({
        code: this.state.code + button
      });
    }
  };

  print = () => {};

  backspace = () => {
    this.setState({
      code: this.state.code.slice(0, -1)
    });
  };

  reset = () => {
    this.setState({
      code: ""
    });
  };
  handleChange(event) {
    this.setState({ value: event.target.code });
  }
  render() {
    return (
      <>
        <div className="bookcode-container">
          <div className="code-head">Booking Code</div>
          <center>
            <div style={{ flex: 1, flexDirection: "row" }}>
              <input
                className="input"
                placeholder="123456"
                value={this.state.code}
              />
              <button
                name="X"
                className="ButtonSquare-whiteee"
                onClick={this.reset}
              >
                X
              </button>
            </div>
            <Numpad onClick={this.clickhandle} />
          </center>
        </div>
      </>
    );
  }
}
