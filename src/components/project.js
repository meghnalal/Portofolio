import React from "react";
import project from "../Utils/project.json";
const ProjectTimeline = () => {
  return (
    <div className="h-auto mb-24 sm:mx-auto">
      {/* Heading */}
      <h1 className="font-broadacre-3 text-4xl sm:text-8xl pb-16 text-background-third ">
        Projects
      </h1>
      {/* Projects Section */}
      {project.map((project, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-2 mb-6 group bg-shadow-cream p-2 rounded-lg shadow-lg"
        >
          {/* Left Section: Project Description */}
          <div className="relative flex flex-col justify-center p-6 bg-shadow-cream rounded-lg border-r-[1px] border-background-third transition-transform transform group-hover:scale-105 group-hover:shadow-xl">
            <h2 className="font-broadacre-text text-xs sm:text-3xl mb-4 text-background-third">
              {project.title}
            </h2>
            <p className="my-2 text-dim-gray text-xs sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Right Section: Ultra-Compact Vertical Timeline */}
          <div className="relative w-full flex flex-col p-4">
            {/* Milestones */}
            {project.milestones.map((milestone, milestoneIndex) => (
              <div
                key={milestoneIndex}
                className="relative flex items-start my-2"
              >
                {/* Timeline Circle */}
                <div className="absolute left-[10px] w-3 h-3 bg-background-third rounded-full"></div>

                {/* Timeline Content */}
                <div className="ml-8 p-3 bg-background rounded-lg shadow-md text-left transition-transform transform hover:scale-105 hover:shadow-lg">
                  <h3 className="text-background-third font-broadacre-text text-sm sm:text-base">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-xs text-dim-gray mt-1">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTimeline;
