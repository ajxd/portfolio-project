import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const projectLogos = [
    {
      src: "/1.png",
      title: "Backpack Bazaar",
      description:
        "A PHP-based e-commerce website for backpack sales with a secure admin panel and responsive design.",
    },
    {
      src: "/2.png",
      title: "Fusion Clothing",
      description:
        "An Android e-commerce app using Java and Firebase, featuring Google Authentication and Stripe Payment Integration.",
    },
    {
      src: "/3.png",
      title: "Food Mart",
      description:
        "A Flutter-based food delivery app with real-time order updates, location tracking, and secure payment integration.",
    },
    {
      src: "/4.png",
      title: "Craft Voyage",
      description:
        "An e-commerce website for craft sales with Stripe payment integration and a chatbot for customer support.",
    },
    {
      src: "/5.png",
      title: "Card Game",
      description:
        "A browser-based interactive card game developed with JavaScript, featuring game logic and responsive design.",
    },
    {
      src: "/6.png",
      title: "Movie Master",
      description:
        "An ASP.NET web application for movie ticket sales, implemented with the MVC pattern for scalability.",
    },
    {
      src: "/7.png",
      title: "Dynamic Registration System",
      description:
        "A .NET-based registration system with real-time validation and secure database integration for streamlined data collection.",
    },
  ];

  const rotateCarousel = (direction: "left" | "right") => {
    const angle = 360 / projectLogos.length;
    const newRotation = direction === "right" ? currentRotation - angle : currentRotation + angle;
    setCurrentRotation(newRotation);
  };

  const calculateActiveProjectIndex = (): number => {
    const angle = 360 / projectLogos.length;
    const index = Math.round((360 - (currentRotation % 360)) / angle) % projectLogos.length;
    return index < 0 ? projectLogos.length + index : index;
  };

  useEffect(() => {
    const angle = 360 / projectLogos.length;

    const updatePositions = () => {
      const cards = carouselRef.current?.querySelectorAll<HTMLDivElement>(".carousel-card");
      if (!cards) return;

      const translateZ = 300;

      cards.forEach((card, index) => {
        const normalizedIndex = index - calculateActiveProjectIndex();
        const rotateY = angle * normalizedIndex;

        card.style.transform = `
          rotateY(${rotateY}deg)
          translateZ(${translateZ}px)
          translateX(${mouseX / 50}px)
          translateY(${mouseY / 50}px)
        `;
        card.style.transition = "transform 1s ease-in-out";
        card.style.opacity = `${Math.max(0.3, Math.cos((rotateY * Math.PI) / 180))}`;
        card.style.zIndex = `${Math.round((Math.cos((rotateY * Math.PI) / 180) + 1) * 100)}`;
      });
    };

    updatePositions();
  }, [currentRotation, mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX - window.innerWidth / 2);
    setMouseY(e.clientY - window.innerHeight / 2);
  };

  const activeProjectIndex = calculateActiveProjectIndex();

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        overflow: "hidden",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      {/* Full-Screen Spline 3D Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Spline scene="https://prod.spline.design/6lDBNppC4mtek-SR/scene.splinecode" />
      </div>

      {/* 3D Carousel */}
      <div
        ref={carouselRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          perspective: "1500px",
          zIndex: 1,
          width: "100%",
          maxWidth: "800px",
          height: "400px",
        }}
      >
        {projectLogos.map((project, index) => (
          <div
            key={index}
            className="carousel-card"
            style={{
              position: "absolute",
              width: "150px",
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformStyle: "preserve-3d",
              borderRadius: "15px",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <motion.img
              src={project.src}
              alt={`Project ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
              }}
              whileHover={{ scale: 1.2, rotateZ: 10 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => rotateCarousel("left")}
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          padding: "10px 20px",
          fontSize: "2rem",
          cursor: "pointer",
          borderRadius: "50%",
          zIndex: 2,
          border: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => rotateCarousel("right")}
        style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#ffffff",
          padding: "10px 20px",
          fontSize: "2rem",
          cursor: "pointer",
          borderRadius: "50%",
          zIndex: 2,
          border: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        &gt;
      </button>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#ffffff",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
          borderRadius: "15px",
          padding: "20px",
          width: "80%",
          maxWidth: "700px",
          zIndex: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {projectLogos[activeProjectIndex].title}
        </h2>
        <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
          {projectLogos[activeProjectIndex].description}
        </p>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
