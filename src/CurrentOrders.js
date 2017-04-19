import React, { Component } from 'react';

export default class CurrentOrders extends Component {

	componentWillMount() {
		this.props.handleMenuClick(2);
	}

	render() {
		return(
			<div>This is the the current orders screen!</div>
		)
	}
}