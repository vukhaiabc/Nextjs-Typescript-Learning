import * as React from 'react';
import { HeaderComponent } from '../products/[productId]';
import { useRouter } from 'next/router';
export interface TodosProps {}

export default function Todos(props: TodosProps) {
  const router = useRouter();
  const [todoList, setTodoList] = React.useState([]);
  const page = router.query?.page || 1
  console.log(page);
  
  React.useEffect(() => {
    (async () => {
      if(!page) return;
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}`);
      const data = await response.json();
      setTodoList(data);
    })();
  }, []);
  const handleNextPage = () => {
    router.push(
      {
        pathname : '/todos',
      }
    )
  }
  return (
    <div>
      <HeaderComponent />
      <div className="py-5">Query Router : {JSON.stringify(router.query)} </div>
      <ul className="px-10 py-10">
        {todoList.map((todo: any) => (
          <li 
          className="py-1 text-red-500 cursor-pointer hover:text-red-800 transition-all duration-150" 
          key={todo.id}
          >
            {todo.title}
          </li>
        ))}
      </ul>
      <button className='' onClick={handleNextPage}> Next Page</button>
    </div>
  );
}
