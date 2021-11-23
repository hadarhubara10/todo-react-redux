import { ActionTypes } from './actionTypes';
export const setTodos = (todo) => {
  return {
    type: ActionTypes.SET_TODO,
    payload: todo,
  };
};
export const selectedTodo = () => {
  return {
    type: ActionTypes.SHOW_TODO,
  };
};
export const removeTodo = (id) => {
  return {
    type: ActionTypes.REMOVE_TODO,
    payload: id,
  };
};

export const editTodoAction = (index, text) => {
  return {
    type: ActionTypes.EDIT_TODO,
    payload: { index, text },
  };
};
