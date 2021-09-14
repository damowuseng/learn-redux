import React, {PureComponent} from 'react';
import {connect} from "../utils/connect";

import {incrementAction, decrementAction} from "../store/actionCreators";

class About extends PureComponent {
	render() {
		const {counter, increment, decrement} = this.props
		return (
				<div>
					<div>
						<h1>About</h1>
						<h2>current-counter: {counter}</h2>
						<button onClick={e => increment(5)}>+5</button>
						<button onClick={e => decrement(5)}>-5</button>
					</div>
				</div>
		);
	}
}
const mapStateToProps = state => ({
	counter: state.counter
});
const mapDispatchToProps = dispatch => ({
	increment(num) {
		dispatch(incrementAction(num))
	},
	decrement(num) {
		dispatch(decrementAction(num))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(About);
