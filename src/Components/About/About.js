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
import './About.css';

function About() {

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

  return (
    
    <div className="bg-black  w-full h-full   " >
      <section className="w-full ">
      <ParallaxText baseVelocity={-5}  >ABOUT</ParallaxText>
      <ParallaxText baseVelocity={5}>ME</ParallaxText>
    </section>
    
      <div className=" py-10 md:py-14 container mx-auto flex flex-col h-full  items-left text-white  font-bold tracking-widest text-xl  md:text-4xl text-justify   ">
    <p className=" text-justify  px-10 font-medium size- ">
    I am a freelance developer with a track record in creating cutting-edge websites, web apps, and mobile apps, consistently delivering high-quality results on time and within budget. As I enter my final year of Computer Science and Engineering at Nehru College of Engineering & Research Centre, my focus has shifted to cybersecurity. I am exploring its complexities as a passionate security researcher. I am eager to combine my development expertise with my growing knowledge in cybersecurity to take on challenging and impactful projects.
    </p>
</div>

    </div>
   
    
  );
}
export default About;