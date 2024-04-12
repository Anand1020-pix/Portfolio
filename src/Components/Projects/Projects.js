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
      { title: 'IoT:Sensor Data Monitoring System', description: 'The Sensor Data Monitoring System repository is a project that collects and monitors sensor data using an Arduino Uno, TDS sensor, water temperature sensor, and three water flow sensors. It then displays the data in real-time on a Flutter application.'
      , link: 'https://github.com/Anand1020-pix/IOT' },
      { title: 'Hey Auto', description:'Auto is a React Native app designed to digitalize auto taxi services, utilizing Firebase as the backend. It displays available auto services, enhancing convenience for users seeking transportation options.', 
      link: 'https://github.com/Anand1020-pix/HeyAuto' },
      { title: 'Face Filter', description:'The Face Filter project utilizes TensorFlow.js and the Face Landmarks Detection model to track faces in webcam video and apply filters in real-time. Users can capture photos with filters and view them later', 
      link: 'https://github.com/Anand1020-pix/facefilter' },
    ];

  return (
    
    <div className="bg-black  w-full h-full   " >
      <section className="w-full ">
      <ParallaxText baseVelocity={-5}  >Projects</ParallaxText>
    </section>
    
    <div>
    <div className=" text-white grid  md:grid-cols-3 gap-4  px-6 ">
  
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center p-4 bg-transparent hover:text-black hover:bg-gray-200  rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <h2 className="mb-4 text-lg font-bold">{project.title}</h2>
          <p className="mb-4 w-full h-32 md:h-64 object-cover    px-10 font-medium text-center " > {project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Know More</a>
        </div>
      ))}
    </div>
    </div>

    </div>
   
    
  );
}
export default Projects;