import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Projects() {

  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false
    });
  
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }
    const projects = [
      { title: 'IoT:SDMS', description: 'Arduino-based water sensor monitoring system'
      , link: 'https://github.com/Anand1020-pix/IOT' },
      { title: 'CDAS', description:' CDAS - Crime Detection and Surveillance System', 
      link: 'https://github.com/Anand1020-pix/CDAS' },
    ];

  return (
    
    <div className="bg-black  w-full h-full   " >
      <section className="w-full ">
      <ParallaxText baseVelocity={-5}  >Projects</ParallaxText>
    </section>
    
    <div className="h-full" >
    <Carousel showThumbs={false} className="h-full sm:p-20 p-10">
    {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-transparent text-white hover:text-black hover:bg-gray-200  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <h2 className="mb-4 text-lg font-bold ">{project.title}</h2>
            <p className="mb-4 w-full h-42 md:h-64 object-cover px-10 font-medium text-center " > {project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-5 bg-blue-500 text-white rounded hover:bg-blue-700 object-cover ">Know More</a>
        </div>
    ))}
</Carousel>
    </div>

    </div>
   
    
  );
}
export default Projects;