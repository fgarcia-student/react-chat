//want
//messages screen displaying messages of users {ListMessages}
//textbox with button to send new message to messages screen {InputMessage, Message}

import React, {Component} from 'react';
import Message from './message';
import ListMessages from './listmessages';
import InputMessage from './inputmessage';

class App extends Component {
	constructor() {
		super();
		this.state = {
			messages : [<Message content="Testing" />]
		};
	}

	handleSubmit(text) {
		let m = <Message content={text} />
		this.setState((prevState,props) => {
			messages : prevState.messages.push(m)
		});
	}

	render() {
		return (
			<div className="container">
				<ListMessages messages={this.state.messages} />
				<InputMessage onSubmit={this.handleSubmit.bind(this)}/>
			</div>	
		);
	}
}

export default App;