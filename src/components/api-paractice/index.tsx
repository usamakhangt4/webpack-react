/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */

import axios from 'axios';

export default function ApiParactice() {
  const GetTodos = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
      params: { _limit: 1 },
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const AddTodos = () => {
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: { title: 'test todo', completed: false },
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const PutTodos = () => {
    axios({
      method: 'put',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      data: { title: 'updated todo', completed: true },
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const PatchTodos = () => {
    axios({
      method: 'patch',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      data: { title: 'updated todo', completed: true },
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const DeleteTodos = () => {
    axios({
      method: 'delete',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  return (
    <>
      <h1>Api Paractice (watch console)</h1>

      <article className="buttons-container">
        <button onClick={GetTodos}>get</button>
        <button onClick={AddTodos}>post</button>
        <button onClick={PutTodos}>put</button>
        <button onClick={PatchTodos}>patch</button>
        <button onClick={DeleteTodos}>delete</button>
      </article>
    </>
  );
}
