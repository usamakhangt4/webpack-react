/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
import Hoc from './hoc';
import { useFetch } from './use-fetch';

export default function index() {
  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const WrappedComponent = () => {
    return (
      <div>
        <h1>{loading ? 'Loading...' : 'Loaded'}</h1>
        <h2>{error ? 'Error' : 'No Error'}</h2>
        <ul>
          {data && data.map((user: any) => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  };

  return (
    <>
      <Hoc Component={WrappedComponent} />
    </>
  );
}
