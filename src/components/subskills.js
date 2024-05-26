import React from "react";
const SubSkills = () => {
  const skills = [
    "VERSATILITY",
    "INNOVATION",
    "INDUSTRY INSIGHT",
    "HARD WORKER",
    "CONTINUOS LEARNER ",
  ];

  return (
    <div className="h-screen p-16">
      <h3 className="font-broadacre-text text-l text-dim-gray mb-8">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-shadow-cream text-dim-gray px-4 py-2 rounded-lg mr-[2px] mb-2"
          >
            {skill}
          </span>
        ))}
      </h3>
    </div>
  );
};

export default SubSkills;
