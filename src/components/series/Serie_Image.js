import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../INJECTION_PC_4/1.jpg';

const scroll = {
    height: "100%",
    overflowY: "scroll",
    whiteSpace: "nowrap",

}

let App = () => {
    return <div class="row">
        <div>
            {Array.from(Array(20), (e, i) => {
                i = i + 1
                return (<img style={{ width: "23vh", marginRight:20 }} src={logo}/>
                )
            })}
        </div>

    </div>
}

export default class Serie_Image extends Component {

    render() {
        return (
            <div class="container " style={{marginLeft: "5px" }, scroll}  >
                <App />

            </div>
        )
    }
}