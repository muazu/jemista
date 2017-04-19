import React, { Component } from 'react';

export default class NewOrder extends Component {

	componentWillMount() {
		this.props.handleMenuClick(1);
	}

	render() {
		return(
			<div>This is the the new order screen!</div>
		)
	}
}