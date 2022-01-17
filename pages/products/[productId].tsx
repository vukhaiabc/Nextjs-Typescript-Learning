import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import Header from '../../components/common/header';
import dynamic from 'next/dynamic';

export const HeaderComponent = dynamic(()=> import('../../components/common/header'),{ssr : false})
export interface ProductDetailProps {
  post : any,
}

export default function ProductDetail ({post}: ProductDetailProps) {
  const router = useRouter()
  if(!post) return null;
  return (
    <div>
      <HeaderComponent />
      <p  className='text-5xl text-center text-gray-800 p-10'> Trang Detail Product </p>
      <ul className='py-3 px-10'>
        <li>{post.id}</li>
        <li>{post.title}</li>
      </ul>
      <div className='text-3xl text-rose-500 mt-16'> Query param :    {JSON.stringify(router.query)}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1`)
  const data = await response.json()
  // console.log(data);
  
  return {
    // paths : [{params :{productId : '1'}}, {params :{productId : '2'}}],
    paths : data.map((post : any) => ({params : {productId : `${post.id}`}})),
    fallback : false,
  }
}

export async function getStaticProps(context :GetStaticPropsContext) {
  const productId = context.params?.productId
  if(!productId) return {
    notFound : true,
  }
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
  const post = await response.json()
  
  return {
    props: {post}
  }
}