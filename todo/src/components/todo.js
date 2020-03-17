import React from 'react'

export default function Todo (props) {

    return (
        <div>
            <h2 style={{color: props.item.completed ? 'green' : 'hotpink', textDecoration: props.item.completed ? 'line-through' : ''}}
                    onClick={e => {
                        e.preventDefault()
                        props.toggleComplete(props.item.id)
                    }}>{props.item.item}</h2>
        </div>
    )
}