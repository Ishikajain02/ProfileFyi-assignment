import React from 'react';

const Shimmer = () => {
  return (
    <div className=''>
        <h1 className='text-xl'>Loading...</h1>
        <div className='flex flex-wrap justify-center'>
      {Array(10).fill("").map((_, index) => (
        <div key={index} className='w-[450px] h-[650px] rounded-xl bg-slate-100 shadow-2xl border-black flex justify-center flex-col items-center p-4 m-10'>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default Shimmer;
