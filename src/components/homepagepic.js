import meghna3 from "../image/meghna_lal.png";
import meghna1 from "../image/meghnajapan.png";
import meghna2 from "../image/meghnachile.jpg";
import React, { useRef, useEffect } from "react";
import gsap from "gsap"; // <-- import GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger"; // <-- import the hook from our React package

gsap.registerPlugin(ScrollTrigger);

const HomePagePic = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const transformations = [
        "rotate(-10deg)", // Transformation for the first image
        "rotate(-5deg)", // Transformation for the second image
        "rotate(10deg)", // Transformation for the third image
      ];
      const refs = [imageRef1, imageRef2, imageRef3];
      const maxMovement = 7; // Adjust the maximum movement value as needed

      refs.forEach((ref, index) => {
        const image = ref.current;
        if (image) {
          const imageRect = image.getBoundingClientRect();
          const mouseX = e.clientX - imageRect.left;
          const mouseY = e.clientY - imageRect.top;

          const offsetX =
            ((mouseX - imageRect.width / 2) / imageRect.width) * maxMovement;
          const offsetY =
            ((mouseY - imageRect.height / 2) / imageRect.height) * maxMovement;

          const baseTransform = transformations[index];
          image.style.transform = `${baseTransform} translate(${offsetX}px, ${offsetY}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="">
      <img
        ref={imageRef1}
        className="absolute rounded-xl w-[150px] h-[200px] object-cover text-primary mt-[7%] top-0 left-0"
        style={{ transform: "rotate(-10deg)" }}
        src={meghna2}
        alt="me"
      />

      <img
        ref={imageRef2}
        className="absolute rounded-xl w-[150px] h-[150px] object-cover text-primary mt-[25%] bottom-20 right-[10px]"
        style={{ transform: "rotate(0deg)" }}
        src={meghna1}
        alt="me"
      />
      <img
        ref={imageRef3}
        className="absolute rounded-xl w-[130px] h-[200px] z-auto  text-primary mt-[0%] top-0 left-1/2 transform -translate-x-1/2 "
        style={{ transform: "rotate(10deg)" }}
        src={meghna3}
        alt="me"
      />
      {/* <img
        ref={imageRef3}
        className="absolute rounded-xl w-[600px] h-[600px] object-contain text-primary mt-[0%] top-0 left-1/2 transform -translate-x-1/2 "
        style={{ transform: "rotate(10deg)" }}
        src={meghna}
        alt="me"
      /> */}
    </div>
  );
};

export default HomePagePic;
