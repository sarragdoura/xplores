import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Serie_table from '../series/Serie_table.js';
const homePage = {
    backgroundColor: "#2d3e50",
    width: "100%",
    height: "100%",
    position: "fixed",
    padding: "0",
    margin: "0",
    top: "0",
    left: "0"

};
const center = {
    margin: "auto",
    marginTop: "200px",
    display: "block"
}
const button = {
    width: "254px",
    height: "226px"

}

export default class Body extends Component {

    render() {
        return (
            <Router>
                <div style={homePage}>
                    <div style={center} class="order-lg-last" >
                        <Link to="/Serie" class="btn btn-primary" style={button}><h1 style={{ marginTop: "60px" }}>CT</h1></Link>
                    </div>
                    Modality
               </div>
            </Router>
        )
    }
}