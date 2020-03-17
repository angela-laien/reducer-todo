import React, { useState } from 'react'

export default function TodoForm (props) {
    const [item, setItem] = useState('');

    return(
        <form onSubmit= { e => {
            e.preventDefault()
            props.addItem(item)
            setItem('')
        }}>
            <input
                name='item'
                placeholder='Add Item'
                value={item}
                onChange={e => {
                    setItem(e.target.value)
                }}
            />
            <button className='btn' type='submit'>Add Item</button>
        </form>
    )
}