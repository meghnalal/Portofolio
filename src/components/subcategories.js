import React from 'react';
import { Link } from 'react-router-dom';

const Subcat = ({ children }) => {
const handleOnClick = () => {
        alert('Clicked!');
        // Add any other logic you want to execute on click
      };
  return (
<div className="flex items-center justify-center">
  <Link to="/about" className="link">
    <div
      className="h-[40px] font-mainFont text-4xl mx-4 text-primary relative transition duration-1000 ease-in-out overflow-hidden hover:scale-110"
      onClick={handleOnClick}
    >
      About
      <div className="border-b-2 w-[78px] border-primary h-full absolute duration-1000 opacity-0 hover:opacity-100 transition-opacity top-0 left-0"></div>
    </div>
  </Link>
  <Link to="/experience" className="link">
    <h2
      className="h-[40px] w-[150px] font-mainFont text-4xl mx-4 text-primary relative transition duration-1000 ease-in-out overflow-hidden hover:scale-110"
      onClick={handleOnClick}
    >
      Experience
      <div className="border-b-2 w-[180px] border-primary h-full absolute duration-1000 opacity-0 hover:opacity-100 transition-opacity top-0 left-0"></div>
    </h2>
  </Link>
</div>

  ); 
};

export default Subcat;