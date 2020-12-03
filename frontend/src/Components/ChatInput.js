import React, { Component } from 'react'

export default class ChatInput extends Component {
    
    // WOULD NEED ANOTHER INPUTS FOR EACH EVENT DETAIL //
    
    state = {
        chatInput: ""
    }

    textChangeHandler = (event) => {
        return this.setState({ chatInput: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onSend(this.state.chatInput)
        this.setState({ chatInput: "" })
    }

    render() {
        return (
            <div>
                <form className="chat-input" onSubmit={ this.submitHandler }>
                    <input
                        type="text"
                        onChange={ this.textChangeHandler }
                        value={ this.state.chatInput }
                        placeholder="message"
                    />
                </form>
            </div>
        )
    }
}
