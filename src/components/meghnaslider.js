import React, { useEffect, useRef } from "react";
import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP, TextPlugin);

const LogoSlider = () => {
  const logoRef = useRef(null);
  useGSAP(() => {
    gsap.from("slider", {
      opacity: 0,
    });
    gsap.to(logoRef.current, {
      duration: 1.5,
      y: "100px",
      ease: "bounce.out",
      opacity: 1,
    });
  }, []);

  return (
    <div
      className="flex w-screen border-2 border-black w-2200 overflow-visible"
      ref={logoRef}
    >
      <div className=" w-screen border-2 border-black relative pr-32">
        <h1
          key="1"
          className="w-auto border-2 border-red-600 font-broadacre-3 text-9xl mb-6 text-background-third"
        >
          <code className="flex font-broadacre-3">I'm Meghna</code>{" "}
        </h1>
      </div>
    </div>
  );
};

export default LogoSlider;
