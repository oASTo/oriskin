import React, { Component } from 'react';
import Button from './Button';

export default function Numpad(){
    return(
        <div style={{flexDirection:'column',flex:1}}>
        <div style={{flexDirection:"row"}}>
        <Button title="1"/>
        <Button title="2"/>
        <Button title="3"/>
        </div>
        <div style={{flexDirection:"row"}}>
        <Button title="4"/>
        <Button title="5"/>
        <Button title="6"/>
        </div>
        <div style={{flexDirection:"row"}}>
        <Button title="7"/>
        <Button title="8"/>
        <Button title="9"/>
        </div>
        <div style={{flexDirection:"row"}}>
        <Button title="<"/>
        <Button title="0"/>
        <Button title="Print"/>
        </div>
    </div>

    )
}
