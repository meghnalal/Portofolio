import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import horizontalLoop from "./horizontalLoop";
gsap.registerPlugin(useGSAP, TextPlugin);
const LogoSlider2 = () => {
  const containerRef = useRef(null);
  let ctx;

  useGSAP(() => {
    const initAnimation = async () => {
      const textElements = Array.from(document.querySelectorAll(".text"));
      ctx = gsap.context(() => {
        const loop = horizontalLoop(textElements, {
          paused: false,
          repeat: -1,
          paddingRight: 10,
        });
      }, containerRef.current);
    };

    initAnimation();
    gsap.from(containerRef.current, {
      opacity: 0,
    });
    gsap.to(containerRef.current, {
      duration: 1.5,
      y: "80px",
      ease: "bounce.out",
      opacity: 1,
    });
  }, []);

  return (
    <main className="main">
      <div className="container" ref={containerRef}>
        <div className="text text-center font-broadacre-3 text-9xl mb-6 text-background-third">
          Hello!
        </div>
        <div className="text font-broadacre-3 text-9xl mb-6 text-background-third">
          I'm Meghna Lal
        </div>
      </div>
    </main>
  );
};

export default LogoSlider2;
