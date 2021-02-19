import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home_Page from './components/series/Home_Page';
import All from './components/regions/All';



export default class SeriesRegions extends Component {
	render() {
		return (
			<Router>
					<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" style={{ height: "40px" }} id="ftco-navbar">
						<div class="container" >

							<div class="collapse navbar-collapse" style={{ marginLeft: "450px" }} id="ftco-nav">
								<ul class="navbar-nav mr-auto" 	>
									<Link to="/se" class="nav-item "><a href="" class="nav-link" style={{ height: "40px" }} >Series</a></Link>
									<Link to="/re" class="nav-item"><a href="" class="nav-link" style={{ height: "40px" }}>Regions</a></Link>

								</ul>

							</div>
						</div>
					</nav>
					<Route path="/se" exact component={Home_Page} />
					<Route path="/re" component={All} />
			</Router>
		)
	}
} 