import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Spline from "@splinetool/react-spline";

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* 3D Background */}
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>

      {/* Spline Animation */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          zIndex: 1, // Spline on top
          pointerEvents: "auto", // Allow interactions with Spline
        }}
      >
        <Spline scene="https://prod.spline.design/aAx5AYfuumWUrn1A/scene.splinecode"  />
      </div>
    </div>
  );
};

export default HomePage;
