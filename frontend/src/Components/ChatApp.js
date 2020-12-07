import React, { Component } from 'react'
import Messages from "./Messages"
import ChatInput from "./ChatInput"
import io from 'socket.io-client';
import '../Styling/ChatApp.css'
import {Animated} from "react-animated-css";

const api = "http://localhost:4000"

export default class ChatApp extends Component {
    
    socket = {}

    constructor(props) {
        super(props)
        this.socket = io(api).connect()
        this.socket.on('server:message', message => {
            this.addMessage(message)
        })
    }

    state = {
        messages: []
    }
    
    sendMessageHandler = (message) => {
        const messageObject = {
            username: this.props.username,
            message
        }
        
        this.socket.emit("client:message", messageObject)
    }
    
    addMessage = (message) => {
        return this.setState({ messages: [...this.state.messages, message]})
    }
    
    render() {
        return (

            <div className="main-container">

            <Animated animationIn="bounceInLeft" isVisible={true}>
                <h3 className="chat-app-header">swiftly</h3>
            </Animated>

                <Messages username={this.props.username} messages={ this.state.messages }/>
                <ChatInput sendMessage={ this.sendMessageHandler }/>

            </div>

        )
    }
}
