import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const center = {
    marginTop: "30%",
    display: "block"
}
const HoverText = styled.button`
transition-duration: 0.4s;

color: #fff;
background-color: #dc3545;
border-color: #dc3545;
padding: 10px 16px;
cursor: pointer;
border-radius: 4px;
-webkit-box-shadow: none !important;
box-shadow: none !important;
font-size: 11px;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 600;
:hover {
    color: #fff;
    background-color: #fff;
  color: #dc3545 ;
  cursor: pointer;
}
`
export default class Serie_validation extends Component {
    render() {
        return (
            <div style={{ marginTop: "70%", marginLeft: "10" }}>
              <h4 style={{color:"#00b379"}}>Series Valiation</h4>
                <h6 style={center}> validate selected serie</h6>
                <div style={{ marginTop: "10%" }} class="order-lg-last" >
                    <button to="/Serie" class="btn btn-primary">✓</button>
                    <HoverText to="/Serie" class="btn btn-danger">X</HoverText>
                </div>
            </div>
        )
    }
}