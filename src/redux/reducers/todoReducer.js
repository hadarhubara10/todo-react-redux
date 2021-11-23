import { ActionTypes } from '../actions/actionTypes';
import { combineReducers } from 'redux';

const initialState = [
  {
    text: 'test',
    date: new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date()),
  },
];
// Check
export const TodosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_TODO:
      return state;
    case ActionTypes.SET_TODO:
      return [...state, { ...payload }];
    case ActionTypes.REMOVE_TODO:
      return state.filter((todo, i) => i !== payload);
    case ActionTypes.EDIT_TODO:
      console.log(payload);
      return state.map((todo, i) =>
        i === payload.index ? { text: payload.text, date: todo.date } : todo
      );
    default:
      return state;
  }
};
const reducers = combineReducers({
  allTodos: TodosReducer,
});

export default reducers;
