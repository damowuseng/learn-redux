
const incrementAction = num => ({
	type:'INCREMENT',
	num
});

const decrementAction = num => ({
	type:'DECREMENT',
	num
});



export {
	incrementAction,
	decrementAction
};
