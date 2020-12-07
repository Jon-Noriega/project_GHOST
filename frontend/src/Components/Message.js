import React, { useState, useEffect } from 'react'
import {Animated} from "react-animated-css";
import { Button } from 'react-bootstrap';
// import { Spinner } from 'react-bootstrap';
// import EventSummary from "./EventSummary"


export default function Message(props) {
    
    const { textInput, eventNameInput, locationInput, timeInput, messageType } = props.message

    const [seconds, setSeconds] = useState(10)
    const [expired, setExpired] = useState(false)
    // const [joined, setJoined] = useState(false)

    const fromMe = props.appUserName === props.username ? "from-me" : "from-friends"
    const status = expired ? "expired" : "active"
    // const yay = joined ? "in" : "out"

    useEffect(() => {
        
        const interval = setInterval(() => {
            if(seconds !== 0){
                setSeconds(seconds - 1)
            }
            else {  
                setExpired(true)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [seconds] )

    return (

        <div className={`message ${fromMe}`}>

            <div className={`message-username ${fromMe}`}>
                { props.username }
            </div>

            {messageType === "text"
                ?
                <div className={`text-message-body ${fromMe}`}>
                    <p>{ textInput }</p>
                </div>
                :
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                    <div className={`event-message-body ${status}`}>

                        {/* <Button onClick={() => setJoined(true)} */}
                        <Button
                            // variant="outline-warning" size="sm" className="countdown-button" id={`event-message ${yay}`}>
                            variant="outline-light" size="sm" className="countdown-button">
                                <span className={`event-message-countdown`}>{ seconds }</span>
                        </Button><br></br>

                        {/* <Spinner animation="border" variant="warning" role="status">
                            <span className={`event-message-countdown ${fromMe}` }>{ seconds }</span>
                        </Spinner><br></br> */}

                            <br></br>
                            <p>{eventNameInput}</p>
                            <p>{locationInput}</p>
                            <p>{timeInput}</p>
                    </div>
                </Animated>
            }

        </div>
    )
}

