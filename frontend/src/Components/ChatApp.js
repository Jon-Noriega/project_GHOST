import React, { Component } from 'react'
import Messages from "./Messages"
import ChatInput from "./ChatInput"
import io from 'socket.io-client';
import '../Styling/ChatApp.css'

const api = "http://localhost:4000"

export default class ChatApp extends Component {
    
    socket = {}

    constructor(props) {
        super(props)
        this.socket = io(api).connect()
        this.socket.on('server:message', message => {
            // console.log(message)
            this.addMessage(message);
        })
    }

    state = {
        messages: [],
    }
    
    sendHandler = (message) => {
        const messageObject = {
            username: this.props.username,
            message
        }
        
        this.socket.emit("client:message", messageObject)
    }
    
    addMessage = (message) => {
        return this.setState({ messages: [...this.state.messages, message] })
    }
    
    render() {
        return (
            <div className="container">
                <h3>project_GHOST</h3>
                <Messages username={this.props.username} messages={ this.state.messages }/>
                <ChatInput onSend={ this.sendHandler }/>
            </div>
        )
    }
}
