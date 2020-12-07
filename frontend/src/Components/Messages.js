import React, { Component } from 'react'
import Message from "./Message"
// import {Animated} from "react-animated-css";

export default class Messages extends Component {
    
    messages = () => {
        return this.props.messages.map( (message, i) => {
            return (
                <Message
                    appUserName={this.props.username}
                    key={i}
                    username={message.username}
                    message={message.message}
                />
            )
        })
    }
    
    componentDidUpdate = () => {
        const objDiv = document.getElementById("messageList")
        objDiv.scrollTop = objDiv.scrollHeight
    }

    render() {
        return (
            <div className="messages-container" id="messageList">
                { this.messages() }
            </div>
        )
    }
}
