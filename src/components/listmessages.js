import React, {Component} from 'react';

class ListMessages extends Component {
	constructor(props){
		super(props);
		this.state = {
			ret : this.props.messages
		};
	}

	componentDidMount(){
		this.setState((prevState,props) => {
			ret : this.props.messages
		});
	}

	render(){
		return (
			<div className="well center-text">
				{this.state.ret}
			</div>
		);
	}
}

export default ListMessages;