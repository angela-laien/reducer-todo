import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { initialState, todoReducer } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  console.log(state)

  const addItem = (input) => {
    const newItem = {
      item: input,
      completed: false,
      id: new Date()
    }
    dispatch({type:"ADD_ITEM", payload: newItem})
  }
    const toggleComplete = (id) => {
      dispatch({type:"COMPLETED_ITEM", payload: id})
    }
    const clearCompleted = () => {
      dispatch({type:"CLEAR_COMPLETED"})
    }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList state={state} toggleComplete={toggleComplete} />
      <TodoForm addItem={addItem} />
      <button className='clearbtn' onClick={e => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Completed</button>
    </div>
  );
}

export default App;
