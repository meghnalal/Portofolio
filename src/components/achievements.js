import React from "react";

const Achievements = () => {
  return (
    <div className="  h-[400px] ">
      <h1 className="font-broadacre-3 text-8xl mb-6 text-background-third bg-background  ">
        Achievements
      </h1>
      <div className=" h-auto grid grid-cols-4 gap-4 rounded-xl bg-background-third pb-3">
        <div className=" border-r-[1px] border-background m-4">01</div>
        <div className=" border-r-[1px] border-background m-4 ">02</div>
        <div className=" border-r-[1px] border-background m-4 ">03</div>
        <div className="  ">04</div>
      </div>
    </div>
  );
};

export default Achievements;
