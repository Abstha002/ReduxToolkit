import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todo() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  return (
    <div>
      <h1 className="text-white text-xl mb-4">Todos</h1>
      <ul className="list-none space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  )
}

function TodoItem({ todo, dispatch }) {
  const [isEditable, setIsEditable] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleUpdate = () => {
    if (isEditable) {
      dispatch(updateTodo({ id: todo.id, text: newText }))
    }
    console.log("reached")
    setIsEditable((prev) => !prev)
  }

  return (
    <li className="flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
      <input
        type="text"
        className="text-white bg-transparent outline-none flex-1 mr-4"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        readOnly={!isEditable}
      />

      {/* Update Button */}
      <button
        onClick={handleUpdate}
        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
      >
        {isEditable ? 'Save' : 'Edit'}
      </button>

      {/* Delete Button */}
      <button
        o  onClick={() => dispatch(removeTodo(todo.id))}
        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
      >
        ❌
      </button>
    </li>
  )
}

export default Todo
