import React from 'react';
import Todo from './todo';

export default function TodoList(props) {

    console.log(props)

    return (
        <div>
            {props.state.map(item => {
                return <Todo item={item} key={item.id} toggleComplete={props.toggleComplete} />
            })}
        </div>
    )
}