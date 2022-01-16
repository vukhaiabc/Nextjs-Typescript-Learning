import { useRouter } from 'next/router';
import * as React from 'react';

export interface ProductDetailProps {
}

export default function ProductDetail (props: ProductDetailProps) {
    const router = useRouter()
  return (
    <div className='text-5xl text-center text-gray-800 p-10'>
      Trang Detail Product
      <div className='text-3xl text-rose-500 mt-16'> Query param :    {JSON.stringify(router.query)}</div>
    </div>
  );
}
