import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './index.css'; // Custom CSS faylini import qilish

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center background-img">
      <TodoList />
    </div>
  );
};

export default App;
