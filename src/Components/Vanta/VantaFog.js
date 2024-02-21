import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

function VantaFog() {
  const myRef = useRef(null);

  useEffect(() => {
    if (!myRef.current) return;
    const vantaEffect = FOG({
      THREE,
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xffffff,
      midtoneColor: 0x2c2523,
      lowlightColor: 0x1136de,
      baseColor: 0x0
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={myRef} style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }} />;
}

export default VantaFog;