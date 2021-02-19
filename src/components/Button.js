import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components';

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
const HoverText = styled.button`
transition-duration: 0.4s;
width: 254px;
height: 226px;
color: #2d3e50;
background-color: #01d28e;
border-color: #01d28e;
padding: 10px 16px;
cursor: pointer;
border-radius: 4px;
box-shadow: none !important;
font-size: 50px;
text-transform: uppercase;
letter-spacing: 1px;
font-weight: 600;
:hover {
    color: #01d28e;
    background-color: #2d3e50;
  cursor: pointer;
}
`
const Button = () => {
//<h1 style={{ marginTop: "10px",center	 }}></h1>
	return (
		<div style={homePage}>
			<div style={center} class="order-lg-last" >
				<Link to="/re" ><HoverText>CT</HoverText></Link>
			</div>
                Modality
		</div>
	)
}

export default Button