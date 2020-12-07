import React, { Component } from 'react'
// import {Animated} from "react-animated-css";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class ChatInput extends Component {
    

    state = {
        textInput: "",
        eventNameInput: "",
        locationInput: "",
        timeInput: "",
        show: false
    }

    textChangeHandler = (event) => {
        let {name, value} = event.target
        
        return this.setState({ [name]: value })
    }
    
    submitMessageHandler = (event, messageType) => {
        event.preventDefault()
        // let {name} = event.target
        // console.log(event.target)

        this.props.sendMessage({
            ...this.state,
            messageType: messageType
        })

        this.setState({
            textInput: "",
            eventNameInput: "",
            locationInput: "",
            timeInput: ""
        })
    }
    
    handleClose = () => this.setState({show: false})
    handleShow = () => this.setState({show: true})

    render() {
        return (
            <div className="message-input-container">

                <div className="text-message-input-container">

                    <form className="text-message-input" onSubmit={
                        (event) => {
                            this.submitMessageHandler(event, "text")
                        }
                    }>
                        <input
                            type="text"
                            name="textInput"
                            value={ this.state.textInput }
                            onChange={ this.textChangeHandler }
                            placeholder="text message"
                            />
                        {/* <input type="submit"/> */}
                    </form>

                </div>

                <div className="event-message-input-container">

                    <style type="text/css">
                        {`
                            .btn-color {
                                background-color: rgb(50, 128, 202);
                                color: white;
                            }
                        `}
                    </style>

                    <Button variant="color" size="sm" className="modal-button" onClick={this.handleShow}>
                        event
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title>What did you have in mind?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <form className="event-message-input" onSubmit={
                                    (event) => {
                                        this.submitMessageHandler(event, "event")
                                    }
                                }>
                                    <input
                                        type="text"
                                        name="eventNameInput"
                                        value={ this.state.eventNameInput }
                                        onChange={ this.textChangeHandler }
                                        placeholder="Event name"
                                        />
                                    <input
                                        type="text"
                                        name="locationInput"
                                        value={ this.state.locationInput }
                                        onChange={ this.textChangeHandler }
                                        placeholder="Meetup location"
                                        />
                                    <input
                                        type="text"
                                        name="timeInput"
                                        value={ this.state.timeInput }
                                        onChange={ this.textChangeHandler }
                                        placeholder="Departure time"
                                    />
                                <input type="submit"/>
                            </form>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            Made with 💙
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}