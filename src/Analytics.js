import React, { Component } from 'react';

export default class Analytics extends Component {

	componentWillMount() {
		this.props.handleMenuClick(3);
	}

	render() {
		return(
			<div>This is the the analytics screen!</div>
		)
	}
}