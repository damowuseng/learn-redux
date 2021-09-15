import React, {PureComponent} from 'react';
import {Redirect} from "react-router";


class User extends PureComponent {
	constructor(props) {
		super(props);
		
		this.state = {
			isLogin: true
		}
	}
	render() {
		const {isLogin} = this.state
		return isLogin ? (
				<div>
					<h1>欢迎你~~~~</h1>
				</div>
		) : <Redirect to="/profile"/>
	}
}



export default User;
