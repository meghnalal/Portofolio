import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full flex flex-row-reverse">
      <Link
      to="/experience"
      className="h-[40px] w-[120px] mr-10 font-mainFont text-4xl text-primary relative border-primary hover:border-b-2 transition duration-1000 ease-in-out overflow-hidden hover:scale-110"> My Work
      </Link>
      <Link
      to="/contact"
      className="h-[40px] w-[100px] mr-10 font-mainFont text-4xl text-primary relative border-primary hover:border-b-2 transition duration-1000 ease-in-out overflow-hidden hover:scale-110"> Contact
      </Link>
      <Link
      to="/About"
      className="h-[40px] w-[80px] mr-10 font-mainFont text-4xl text-primary relative border-primary hover:border-b-2 transition duration-1000 ease-in-out overflow-hidden hover:scale-110"> About
      </Link>
       </div>
  ); 
};

export default Header;
