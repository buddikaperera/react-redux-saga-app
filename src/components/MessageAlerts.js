import React from 'react'

const MessageAlerts = (props) => {
    return (
        <React.Fragment>
            <div className={`alert alert-${props.alert_type}`} role="{props.alert_role}">
                {props.message_txt} ..!
            </div>
        </React.Fragment>
    )
}

export default MessageAlerts
