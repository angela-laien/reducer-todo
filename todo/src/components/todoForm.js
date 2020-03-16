import React, { useState } from 'react'

export default function TodoForm (props) {
    const [form, setForm] = useState('');

    return(
        <form onSubmit= { event => {
            event.preventDefault()
            props.addItem(form)
            setForm('')
        }}>
            <input
                name='item'
                placeholder='Add Item'
                value={form}
                onChange={event => {
                    setForm(event.target.value)
                }}
            />
            <button type='submit'>Add Item</button>
        </form>
    )
}