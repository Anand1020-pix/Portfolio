import React, { useRef } from "react";
import VantaFog from "../Vanta/VantaFog";
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
import Python from '../../Assets/logo/Python.png';
import JavaScript from '../../Assets/logo/javascript.png';
import C from '../../Assets/logo/C.png';
import CPlusPlus from '../../Assets/logo/C++.png';
import Flutter from '../../Assets/logo/Flutter.png';
import NodeJs from '../../Assets/logo/Nodejs.png';
import Express from '../../Assets/logo/Express.png';
import Reactjs from '../../Assets/logo/Reactjs.png';
import Flask from '../../Assets/logo/Flask.png';
import Bootstrap from '../../Assets/logo/Bootstrap.png';
import FramerMotion from "../../Assets/logo/framer-motion.svg";
import MongoDB from "../../Assets/logo/Mongodb.png";
import Tailwind from "../../Assets/logo/Thailwindcss.png";
import Threejs from "../../Assets/logo/Threejs.png";
import Firebase from "../../Assets/logo/Firebase.png";
import WordPress from "../../Assets/logo/Wordpress.png";
import Burp from "../../Assets/logo/Burpsuite.png";
import Nmap from "../../Assets/logo/nmap.png";
import Metasploit from "../../Assets/logo/Metasploit.png";
import Aircrack   from "../../Assets/logo/aircrack-ng.jpg";

function Skillslist() {

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

    const logos = { Python, JavaScript, C, CPlusPlus, Flutter, NodeJs, Express, Reactjs, Flask, Bootstrap, FramerMotion, MongoDB, Tailwind, Threejs, Burp, Firebase, Metasploit, WordPress, Nmap, Aircrack};
  return (
    <div>
    <VantaFog  />
        <section className="w-full ">
      <ParallaxText baseVelocity={-5}  >TECHNICAL</ParallaxText>
      <ParallaxText baseVelocity={5}>SKILLS</ParallaxText>
    </section>
    <div className="grid w-full flex-wrap justify-center py-8">
    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-2 p-2 md:p-10 ">
    {Object.keys(logos).map((item, index) => (
      <div key={index} className=" flex justify-center items-center w-24 h-20 md:h-44 md:w-40 bg-transparent border border-gray-300 hover:bg-gray-200 p-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <img src={logos[item]} alt={item} />
      </div>
    ))}
  </div>
  </div>
  </div>
  );
}
export default Skillslist;