import React from 'react'

export default function Message(props) {
    
    const fromMe = props.appUserName === props.username ? "from-me" : "from-friends"

    return (
        <div className={`message ${fromMe}`}>
            <div className={`username ${fromMe}`}>
                { props.username }
            </div>
            <div className={`message-body ${fromMe}`}>
                { props.message }
            </div>
        </div>
    )
}

