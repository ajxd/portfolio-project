import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSplineClick = (event: MouseEvent) => {
      const anchorTag = (event.target as HTMLElement).closest("a"); // Check for the nearest anchor element

      if (anchorTag && anchorTag.href === "http://localhost:3000/home") {
        event.preventDefault(); // Stop the default link behavior
        navigate("/home"); // Navigate to /home using React Router
      }
    };

    // Add a global event listener to capture clicks within the Spline container
    const splineContainer = document.querySelector("#spline-container");
    if (splineContainer) {
      splineContainer.addEventListener("click", handleSplineClick);
    }

    return () => {
      if (splineContainer) {
        splineContainer.removeEventListener("click", handleSplineClick);
      }
    };
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: "rgb(239, 239, 239)",
        overflow: "hidden",
        
      }}
    >
      {/* Spline Animation */}
      <div
        id="spline-container"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "auto",
        }}
      >
        <Spline scene="https://prod.spline.design/dY7qMkPj2WBtUDJH/scene.splinecode" />
      </div>
    </div>
  );
};

export default LandingPage;
