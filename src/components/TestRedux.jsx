import React from 'react';
import { useSelector } from 'react-redux';

const TestRedux = () => {
  const todos = useSelector((state) => state.allTodos);
  return <div>{JSON.stringify(todos)}</div>;
};

export default TestRedux;
