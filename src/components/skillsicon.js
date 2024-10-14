import React from "react";
import { ReactComponent as PythonIcon } from "../image/python.svg";
import { ReactComponent as LinuxIcon } from "../image/linux.svg";
import { ReactComponent as ReactIcon } from "../image/react.svg";
import { ReactComponent as MatlabIcon } from "../image/matlab.svg";
import { ReactComponent as PhotoshopIcon } from "../image/photoshop.svg";
import { ReactComponent as TerminalIcon } from "../image/terminal.svg";
import { ReactComponent as ApiIcon } from "../image/api.svg";
import { ReactComponent as LightroomIcon } from "../image/lightroom.svg";

const SkillsIcon = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-[1px] pb-4 px-2 ">
      <div className="bg-indian-red h-[100px] flex rounded-lg px-2 fill-background justify-center items-center">
        <PythonIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> PYTHON</text>
      </div>
      <div className="bg-indian-red flex rounded-lg px-2 justify-center items-center ">
        <ReactIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> REACT</text>
      </div>
      <div className="bg-indian-red flex rounded-lg px-2 justify-center items-center ">
        <LinuxIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> LINUX</text>
      </div>
      <div className="bg-indian-red flex rounded-lg px-2 justify-center items-center ">
        <PhotoshopIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> PHOTOSHOP</text>
      </div>
      <div className="bg-indian-red h-[100px] flex rounded-lg px-2 justify-center items-center ">
        <TerminalIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> TERMINAL</text>
      </div>
      <div className="bg-indian-red flex rounded-lg px-2 justify-center items-center ">
        <LightroomIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> LIGTHROOM</text>
      </div>
      <div className="bg-indian-red flex rounded-lg px-2 justify-center items-center ">
        <ApiIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> API</text>
      </div>
      <div className="bg-indian-red flex rounded-lg px-2 justify-center items-center ">
        <MatlabIcon className="h-[50px] w-[100px] fill-background" />
        <text className=" text-background font-broadacre"> MATLAB</text>
      </div>
    </div>
  );
};

export default SkillsIcon;
