import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home_Page from './components/series/Home_Page';
import All from './components/regions/All';



export default class SeriesRegions extends Component {
	render() {
		return (
			<Router>
					<nav className="row navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" style={{ height: "40px" }} id="ftco-navbar">
						<div className="container" >

							<div className="collapse navbar-collapse" style={{ marginLeft: "45%" }} id="ftco-nav">
								<ul className="navbar-nav mr-auto" 	>
									<Link to="/se" className="nav-item "><a href="" className="nav-link" style={{ height: "40px" }} >Series</a></Link>
									<Link to="/re" className="nav-item"><a href="" className="nav-link" style={{ height: "40px" }}>Regions</a></Link>

								</ul>

							</div>
						</div>
					</nav>
					<Switch>
					<Route path="/se" exact component={Home_Page} />
					<Route path="/re" component={All} />
					</Switch>
			</Router>
		)
	}
} 