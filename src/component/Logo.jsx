import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
export default function Logo() {
  return (
    <div className="logo1">
      <Canvas>
        <OrbitControls autoRotate={true} enableZoom={false} />
        <ambientLight />
        <directionalLight position={[1, 2, 1]} />
        <mesh>
          <boxGeometry args={[2.6, 1,0 ]} />
          <meshStandardMaterial color={"yellow"}>
            <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
            <RenderTexture attach="map">
              <color attach="background" />
              <Text fontSize={5} color={"black"}>
                Anime
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </div>
  );
}
