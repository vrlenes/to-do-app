export const createTodo = (text) => {
  return {
    id: Date.now(),
    text,
    completed: false,
  };
};