import React, {PureComponent} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import {renderRoutes} from "react-router-config";

function Culture() {
	return (
			<div>
				<h1>culture</h1>
			</div>
	)
	
}

function History() {
	return (
			<div>
				<h1>history</h1>
			</div>
	)
}

function About() {
	return (
			<div>
				<h1>企业介绍</h1>
			</div>
	)
}

class About5 extends PureComponent {
	render() {
		return (
				<div>
					<h1>关于</h1>
					<NavLink exact to="/about">企业介绍</NavLink>
					<NavLink to="/about/culture">企业文化</NavLink>
					<NavLink to="/about/history">企业历史</NavLink>
					
					
					<Switch>
						<Route exact path="/about" component={About}/>
						<Route path="/about/culture" component={Culture}/>
						<Route path="/about/history" component={History}/>
					</Switch>
					
					{/*{renderRoutes(this.props.route.routers)}*/}
				</div>
		);
	}
}

export default About5;
