import React, {PureComponent} from 'react';

import store from "../store";
import {incrementAction} from "../store/actionCreators";

class About extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
	}
	
	componentDidMount() {
		this.unsubscribe =  store.subscribe(() => {
			this.setState({
				counter: store.getState().counter
			})
		})
	}
	
	componentWillUnmount() {
		this.unsubscribe()
	}
	
	render() {
		return (
				<div>
					<div>
						<h1>about</h1>
						<h2>current-counter: {this.state.counter}</h2>
						<button onClick={e => this.increment()}>+</button>
						<button>-</button>
					</div>
				</div>
		);
	}
	increment() {
		store.dispatch(incrementAction(5))
	}
	
}



export default About;
