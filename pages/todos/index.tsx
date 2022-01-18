import * as React from 'react';
import { HeaderComponent } from '../products/[productId]';
import { useRouter } from 'next/router';
export interface TodosProps {}

export default function Todos(props: TodosProps) {
  const router = useRouter();
  const [todoList, setTodoList] = React.useState([]);
  const page = router.query?.page
  console.log(page);

  React.useEffect(() => {
    if(!page) return;
    ;(async () => {
      if (!page) return;
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}`);
      const data = await response.json();
      setTodoList(data);
    })();
  }, [page]);
  const handleNextPage = () => {
    router.push({
      pathname: '/todos',
      query : {
        page : (Number(page) || 1) + 1
      }
    },undefined,
    {shallow:true});
  };
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
      <button
        className="py-3 px-5
       ml-10 rounded-lg
        bg-cyan-500 
        text-white text-xl
         font-semibold 
        hover:bg-cyan-800
         transition-all
         duration-200
         "
        onClick={handleNextPage}
      >
        Next Page
      </button>
    </div>
  );
}
export async function getStaticProps(){
  return {
    props: {
    }
  };
}
