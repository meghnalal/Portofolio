import React, { useState } from "react";
// learning how to do a drop down
const DropdownMenu = () => {
    const [hover, setHover] = useState(false);
  return (
    <div className="relative">
      {/* Menu Title */}
      <div className="menu-title text-center py-3 bg-green-500 text-white font-bold uppercase cursor-pointer transition duration-300 hover:bg-green-600"
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}>
        Menu
      </div>
      
      {/* Dropdown */}
      <div className="menu-dropdown absolute top-full left-0 w-full bg-gray-200 border border-gray-300 rounded-b-md overflow-hidden transition-all"
        style={{ height: hover ? '100px' : '0', transitionDuration: hover ? '0.8s' : '0.3s' }}>
        <div className="py-1">
          <a href="1" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Item 1</a>
          <a href="2" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Item 2</a>
          <a href="3" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Item 3</a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;