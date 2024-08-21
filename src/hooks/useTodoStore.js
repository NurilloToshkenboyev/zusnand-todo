import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text: todo, completed: false }],
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  editTodo: (id, newText) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ),
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),
}));

export default useTodoStore;

