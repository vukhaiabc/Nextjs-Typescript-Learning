import * as React from 'react';
import Header from '../../components/common/header';
import dynamic from 'next/dynamic';
import { HeaderComponent } from '../products/[productId]';
import { useRouter } from 'next/router';
export interface TodosProps {}

export default function Todos(props: TodosProps) {
  const router = useRouter();
  const [todoList, setTodoList] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=1`);
      const data = await response.json();
      setTodoList(data);
    })();
  }, []);
  return (
    <div>
      <HeaderComponent />
      <div className="py-5">Query Router : {JSON.stringify(router.query)} </div>
      <ul className="px-10">
        {todoList.map((todo: any) => (
          <li 
          className="py-1 text-red-500 cursor-pointer hover:text-red-800 transition-all duration-150" 
          key={todo.id}

          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
