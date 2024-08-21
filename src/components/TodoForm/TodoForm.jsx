import React, { useState } from 'react';
import useTodoStore from '../../hooks/useTodoStore';

const TodoForm = ({ todo, onEditEnd }) => {
  const [inputValue, setInputValue] = useState(todo ? todo.text : '');
  const { addTodo, editTodo } = useTodoStore();

  const handleSubmit = () => {
    if (todo) {
      editTodo(todo.id, inputValue);
      onEditEnd();
    } else {
      addTodo(inputValue);
    }
    setInputValue('');
  };

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        className="border rounded-full p-3 w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Yangi todo kiriting"
      />
      <button
        className="ml-2 bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600"
        onClick={handleSubmit}
      >
        {todo ? 'Save' : 'Add'}
      </button>
    </div>
  );
};

export default TodoForm;
