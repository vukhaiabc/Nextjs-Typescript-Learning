import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsProps {
}

export default function Params (props: ParamsProps) {
    const router = useRouter()
  return (
    <div className='text-5xl text-center text-gray-800 p-10'>
      Test Param == 
      <div> Query param : {JSON.stringify(router.query)}</div>
    </div>
  );
}
