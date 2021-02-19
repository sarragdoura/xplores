import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../INJECTION_PC_4/1.jpg';
const scroll = {
    height: "100%",
    overflowX: "scroll",
    overflowY: "scroll",
    whiteSpace: "nowrap",

}
let App = () => {
    return <div class="row">
    <div>
    
                            
        {Array.from(Array(20), (e, i) => {
            i = i + 1
            return (
                <td>
                <img style={{ width: 265, marginRight:20 }} src={logo}/>
                <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label class="form-check-label" for="defaultCheck1">
                            Missing Roi
                        </label>
                    </div>
                    </td>
            )
        })}
        
    </div>

</div>
  }

export default class Region_Image extends Component {
   
    render() {
        return (
            <div class="container " style={{height:"40%", marginLeft: "5px" }, scroll}  >
                <table>
                    <tr>
                     <App/>
                     </tr>
                     </table>
            </div>
        )
    }
}