import React, {Component} from 'react';
import ReactDom from 'react-dom';

class InputMessage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMsg : ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		this.setState({
			currentMsg : event.target.value
		});
	}

	handleClick(){
		this.props.onSubmit(this.state.currentMsg);
		this.setState({
			currentMsg : ""
		})
	}

	render() {
		return (
			<div id="inputText">
				<input type="text" ref="msg" onChange={this.handleChange}></input>
				<button onClick={this.handleClick}>>></button>
			</div>
		);
	}
}

export default InputMessage;