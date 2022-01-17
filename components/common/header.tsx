import * as React from 'react';

export interface HeaderProps {
}

export default function Header (props: HeaderProps) {
    // console.log("Trang header");
    
  return (
    <div className='bg-gradient-to-b from-blue-600 to-cyan-400 text-center py-10 text-5xl'>
      Header
    </div>
  );
}
