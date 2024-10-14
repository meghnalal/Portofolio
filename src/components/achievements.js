import React from "react";
import achievement from "../Utils/achievement.json";

const Achievements = () => {
  return (
    <div className="h-[600px] ">
      <h1 className="font-broadacre-3 text-8xl mb-6 text-background-third bg-background  ">
        Achievements
      </h1>
      <div className="h-auto grid grid-cols-4 gap-6 p-6 rounded-xl bg-background-third pb-6 shadow-2xl">
        {achievement.map((item, index) => (
          <div
            key={index}
            className={`font-broadacre-text border-background p-6 text-background text-l transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg ${
              index === 4 ? "" : "border-r-[1px]"
            }`}
          >
            <p className=" mb-2 font-broadacre text-2xl inline text-left text-background hover:text-accent transition-colors">
              {item.achievement}
            </p>
            <p className="mt-6 mr-2 font-broadacre-text text-right  text-sm text-background-shadow-cream">
              {item.tasks}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;