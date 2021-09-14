import React from 'react';
// import {connect} from "../utils/connect";
import {connect} from "react-redux";
import {
	decrementAction,
	incrementAction} from "../store/actionCreators";

function Home(props) {
	const {counter, increment, decrement} = props;
	return (
				<div>
					<h1>Home</h1>
					<h2>current-counter: {counter}</h2>
					<button onClick={e => increment(2)}>+2</button>
					<button onClick={e => decrement(2)}>-2</button>
				</div>
		);
}

const mapStateToProps = state => {
	return {
		counter: state.counter
	}
};
const mapDispatchToProps = dispatch => {
	return {
		increment: function(num) {
			dispatch(incrementAction(num))
		},
		decrement: function (num) {
			dispatch(decrementAction(num))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


