import React from 'react';
import meghna from '../image/meghna_lal.png'

const Image = () => {
  return (
    
    <div className=" h-screen ">
        <img
            className="h-screen object-contain text-primary mt-[-7%] "
            src={meghna}
            alt="me"
        />
    </div>
      );
    };
    
export default Image;