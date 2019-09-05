import React, { Component } from "react";
import "./Booking.css";
import Button from "./Button";
import Numpad from "./Numpad";

export default class BookingCodeInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      code:""
    }
    this.clickhandle = this.clickhandle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  clickhandle = button =>{
    console.log('klik masuk');

    if(Button.title==="<"){
      this.backspace()
    }
    if(button==="X"){
      console.log('klik masuk(x)');
      this.setState({
        code: this.state.code + button
      })
    }
    if(Button.title==="Print"){
      this.print()
    }
    else{
      this.setState({
        code: this.state.code + Button.title
      })
    }
  };

  backspace = ()=>{
    this.setState({
      code: this.state.code.slice(0,-1)
    })
  };

  reset = () =>{
    console.log('reset masuk eko')
    this.setState({
      code:""
    })

  }
  handleChange(event) {
    this.setState({value: event.target.code});
  }
  render(){
  return (
    <>
      <div className="bookcode-container">
        <div className="code-head">Booking Code</div>
        <center>
          <div style={{flex:1,flexDirection:'row'}}>
        <input className="input" placeholder="123456" value={this.state.code} onChange={this.handleChange} />
          <Button title="X" clickhandle={this.clickhandle} />
          </div>
          <Numpad onClick={this.clickhandle} /></center>
          <button name="X" className="ButtonSquare-whiteee" onClick={this.clickhandle}> X </button>

          <button name="1" className="ButtonSquare-Roundd" onClick={this.clickhandle}> X </button>
            
        
      </div>
    </>
  );
}
}

