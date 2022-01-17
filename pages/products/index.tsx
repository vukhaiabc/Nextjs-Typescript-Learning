import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ProductsProps {
  posts: any[];
}

export default function Products(props: ProductsProps) {
  const { posts } = props;
  const router = useRouter();
  const handleGotoProductDetail = (postId : number) => {
    router.push({
      pathname: '/products/[productId]',
      query: {
        productId: postId,
        name: 'khai',
      },
    });
  };

  return (
    <div className="py-8">
      <p className ='text-center text-5xl text-gray-800'> Trang Product</p>
      <h1 className='text-4xl'>List Post : </h1>
      <ul className='px-10'>
        {posts.map((post) => (
          <li 
          className='text-pink-500 underline text-xl cursor-pointer py-2' 
          key={post.id}
          onClick={()=> handleGotoProductDetail(post.id) }
          >{post.title}</li>
        ))}
      </ul>
     
    </div>
  );
}
export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1');
  const data = await response.json();
  // console.log(data)
  return {
    props: {
      posts: data.map((post : any) => ({id:post.id ,title : post.title})),
    }
  };
}
