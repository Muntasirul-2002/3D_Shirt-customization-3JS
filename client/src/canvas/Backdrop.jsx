import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  // useFrame(() => {
  //   shadows.current.advance();
  // });

  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      {/* //This RandomizedLight is a light source in a 3D model, that makes shadow left side in the shirt */}
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      {/* //This RandomizedLight is a light source in a 3D model, that makes shadow right side in the shirt */}
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-6, 5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
