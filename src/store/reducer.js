

const defaultState = {
	counter: 0
}

function reducer(state = defaultState, action) {
	switch (action.type) {
		case "INCREMENT":
			return {...state, counter: state.counter + action.num}
		case "DECREMENT":
			return {...state, counter: state.counter - action.num}
		default:
			return state
	}
}


export default reducer;
