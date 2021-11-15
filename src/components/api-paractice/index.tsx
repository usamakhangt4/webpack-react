/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */

import axios from 'axios';
import useSWR from 'swr';

const fetcher = async () => {
  const response = await axios.get('https://api.github.com/users/kimjihoon');
  const data = await response.data;
  return data;
};

const ApiParactice = () => {
  const { data, error } = useSWR(
    'https://api.github.com/users/kimjihoon',
    fetcher
  );

  const GetTodos = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
      params: { _limit: 1 },
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  };

  const AddTodos = () => {
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: { title: 'test todo', completed: false },
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  };

  const PutTodos = () => {
    axios({
      method: 'put',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      data: { title: 'updated todo', completed: true },
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  };

  const PatchTodos = () => {
    axios({
      method: 'patch',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      data: { title: 'updated todo', completed: true },
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  };

  const DeleteTodos = () => {
    axios({
      method: 'delete',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    })
      .then(response => console.log(response.data))
      .catch(err => console.log(err));
  };

  const handlePolling = () => {
    const Polling = setInterval(async () => {
      fetcher().then(res => console.log(res));
    }, 1000);

    setTimeout(() => {
      clearInterval(Polling);
    }, 5000);
  };

  const handleSWR = () => {
    if (error) console.error(error);
    if (!data) console.info('Loading...');
    console.log(data);
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
        <button onClick={handlePolling}>polling</button>
        <button onClick={handleSWR}>SWR</button>
      </article>
    </>
  );
};

export default ApiParactice;
