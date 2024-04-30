import React from 'react';

const RedirectButton = () => (
  <div className='p-3 max-w-lg mx-auto'>
    <p>Want to know more about the developer?</p>
    <button onClick={() => window.location.href = 'https://www.instagram.com/ajnarakdaggy/'}>
    <span className='text-blue-700'>Click here</span>
    </button>
  </div>
);

export default RedirectButton;

//export default function Home() {
//  return (
//    <div>Home</div>
//  )
//}




