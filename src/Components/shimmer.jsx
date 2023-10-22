import React from 'react';
import '../App.css';

const Shimmer = () => {
  return (
    <div className='shimmer-container flex flex-col items-center'>
      {/* Shimmer Card 1 */}
      <div className='shimmer-card bg-gray-300 p-4 rounded-md w-full mb-6'>
        <div className='shimmer-image w-full h-64 mb-4 bg-gray-400 rounded-md'></div>
        <div className='shimmer-content'>
          <div className='shimmer-heading h-6 mb-2 bg-gray-400 rounded w-3/4'></div>
          <div className='shimmer-category h-4 mb-2 bg-gray-400 rounded w-1/2'></div>
          <div className='shimmer-author h-4 bg-gray-400 rounded w-1/4'></div>
        </div>
      </div>

      {/* Shimmer Card 2 */}
      <div className='shimmer-card bg-gray-300 p-4 rounded-md w-full mb-6'>
        <div className='shimmer-image w-full h-64 mb-4 bg-gray-400 rounded-md'></div>
        <div className='shimmer-content'>
          <div className='shimmer-heading h-6 mb-2 bg-gray-400 rounded w-3/4'></div>
          <div className='shimmer-category h-4 mb-2 bg-gray-400 rounded w-1/2'></div>
          <div className='shimmer-author h-4 bg-gray-400 rounded w-1/4'></div>
        </div>
      </div>

      {/* Shimmer Card 3 */}
      <div className='shimmer-card bg-gray-300 p-4 rounded-md w-full mb-6'>
        <div className='shimmer-image w-full h-64 mb-4 bg-gray-400 rounded-md'></div>
        <div className='shimmer-content'>
          <div className='shimmer-heading h-6 mb-2 bg-gray-400 rounded w-3/4'></div>
          <div className='shimmer-category h-4 mb-2 bg-gray-400 rounded w-1/2'></div>
          <div className='shimmer-author h-4 bg-gray-400 rounded w-1/4'></div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
