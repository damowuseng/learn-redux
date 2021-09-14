import React, {PureComponent} from 'react';
import store from "../store";
import {decrementAction, incrementAction} from "../store/actionCreators";

class Home extends PureComponent {
	constructor(props) {
		super(props);
		
		this.state = {
			counter: store.getState().counter
		}
	}
	componentDidMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState({
				counter: store.getState().counter
			})
		})
	}
	
	componentWillUnmount() {
		this.unsubscribe()
	}
	
	render() {
		const {counter} = this.state
		return (
				<div>
					<h1>home</h1>
					<h2>current-counter: {counter}</h2>
					<button onClick={e => this.increment()}>+</button>
					<button onClick={e => this.decrement()}>-</button>
				</div>
		);
	}
	increment() {
		store.dispatch(incrementAction(5))
	}
	decrement() {
		store.dispatch(decrementAction(1))
	}
}



export default Home;
