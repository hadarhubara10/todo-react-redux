import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../components/Input';
import { TodoList } from '../components/TodoList';
import {
  editTodoAction,
  removeTodo,
  setTodos,
} from '../redux/actions/todoAction';
export const Container = () => {
  // const initTodoList = JSON.parse(localStorage.getItem('todoList'));
  const todoList = useSelector((state) => state.allTodos);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  // const [todoList, setTodoList] = useState(initTodoList);
  const [valueEdit, setValueEdit] = useState('');
  // Set to localStorage
  useEffect(() => {
    console.log(todoList);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);
  // print todoList when the state change
  const deleteTodo = (index) => {
    dispatch(removeTodo(index));
  };

  const editTodo = (index) => {
    console.log(index);
    dispatch(editTodoAction(index, valueEdit));

    // let newTodoList = [...todoList];
    // newTodoList[i].text = valueEdit;
  };

  const handleChangeEdit = (event) => {
    setValueEdit(event.target.value);
  };
  // set value from input to state
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // Call to pushToList
  const handleSubmit = (event) => {
    if (value !== '') {
      const todayDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(new Date());
      dispatch(setTodos({ text: value, date: todayDate }));
    }
  };
  return (
    <div>
      <Input handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoList
        handleChangeEdit={handleChangeEdit}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        todoList={todoList}
      />
      <br />
    </div>
  );
};
