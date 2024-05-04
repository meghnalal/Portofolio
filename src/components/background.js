import React from 'react';

const DiagonalSplitBackground = ({ children }) => {
  return (
    //overflow-y-auto
    <div className="relative bg-background h-screen ">
      <div
        className="absolute inset-0 h-full w-full transform origin-bottom-right "
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      ></div>
      <div className="z-10 relative">
        {children}
      </div>
    </div>
  );
};

export default DiagonalSplitBackground;