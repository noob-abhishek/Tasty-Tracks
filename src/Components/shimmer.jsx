import React from 'react';
import '../App.css';

const Shimmer = () => {
  return (
    <div className='shimmer-container'>
      {/* Shimmer Card 1 */}
      <div className='shimmer-card'>
        <div className='shimmer-image'></div>
        <div className='shimmer-content'>
          <div className='shimmer-heading'></div>
          <div className='shimmer-category'></div>
          <div className='shimmer-author'></div>
        </div>
      </div>

      {/* Shimmer Card 2 */}
      <div className='shimmer-card'>
        <div className='shimmer-image'></div>
        <div className='shimmer-content'>
          <div className='shimmer-heading'></div>
          <div className='shimmer-category'></div>
          <div className='shimmer-author'></div>
        </div>
      </div>

      {/* Shimmer Card 3 */}
      <div className='shimmer-card'>
        <div className='shimmer-image'></div>
        <div className='shimmer-content'>
          <div className='shimmer-heading'></div>
          <div className='shimmer-category'></div>
          <div className='shimmer-author'></div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
