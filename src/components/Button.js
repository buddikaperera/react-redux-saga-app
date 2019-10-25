// Button components to pass props to other relevant components

import React from 'react'

const Button = (props) => {
    return (
        <button className={`btn btn-${props.alertType}`}
            onClick={props.handler}>
            {props.caption} <i className={`${props.icon}`} ></i>
            {props.count}
        </button>
    )
}

export default Button
