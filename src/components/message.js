import React, {Component} from 'react';

class Message extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let date = new Date();
		let day = date.getDate();
		let mon = date.getMonth();
		let year = date.getFullYear();
		let hour = date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();
		let mil = date.getMilliseconds();
		let formatted = `${mon}/${day}/${year} - ${hour}:${min}:${sec}`;
		return (
			<div className="message">
				<span><span>{formatted} -|- </span>{this.props.content}</span>
			</div>
		);
	}
}

export default Message;