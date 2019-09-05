import React from 'react';


export default function Numpad(props){
    return(
        <div style={{flexDirection:'column',flex:1}}>
        <div style={{flexDirection:"row"}}>
        <button name="1" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>1</button>
        <button name="2" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>2</button>
        <button name="3" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>3</button>
        </div>
        <div style={{flexDirection:"row"}}>
        <button name="4" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>4</button>
        <button name="5" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>5</button>
        <button name="6" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>6</button>
        </div>
        <div style={{flexDirection:"row"}}>
        <button name="7" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>7</button>
        <button name="8" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>8</button>
        <button name="9" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>9</button>
        </div>
        <div style={{flexDirection:"row"}}>
        <button name="<" className="ButtonSquare-black" onClick={e=> props.onClick(e.target.name)}>&lt;</button>
        <button name="0" className="ButtonSquare-Roundd" onClick={e=> props.onClick(e.target.name)}>0</button>
        <button name="Print" className="ButtonSquare-black" onClick={e=> props.onClick(e.target.name)}>Print</button>
        </div>
    </div>

    )
}
