import React, { useState } from 'react';
import useTodoStore from '../../hooks/useTodoStore';
import TodoForm from '../../components/TodoForm/TodoForm';

const TodoList = () => {
  const { todos, removeTodo, toggleTodo } = useTodoStore();
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Todo List</h1>
      {editingTodo ? (
        <TodoForm todo={editingTodo} onEditEnd={() => setEditingTodo(null)} />
      ) : (
        <TodoForm />
      )}
      <ul className="list-none pl-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center mb-3 p-4 rounded-lg bg-green-300 shadow-md w-full max-w-full transition-all duration-300 ease-in-out ${
              todo.completed ? 'line-through text-gray-500' : ''
            } hover:bg-blue-400 hover:shadow-lg`}
          >
            <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer w-full">
              {todo.text}
            </span>
            <div className="flex">
              <button
                className="ml-2 text-yellow-500 hover:text-yellow-700"
                onClick={() => setEditingTodo(todo)}
              >
                Edit
              </button>
              <button
                className="ml-2 text-red-500 hover:text-red-700"
                onClick={() => removeTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
