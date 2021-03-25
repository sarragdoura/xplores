import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Button from "./components/Button";
import SeriesRegions from './SeriesRegions';

function App() {
	return (
		<div className="App">

			<Router>
				<Switch>
					<Route exact path="/" component={Button} />
					<Route exact path="/re" component={SeriesRegions} />
				</Switch>

			</Router>

		</div>
	);
}

export default App;
