import React, {PureComponent} from 'react';

class Details extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
				<div>
					<h1>详情：{this.props.match.params.id}</h1>
				</div>
		);
	}
}

export default Details;
