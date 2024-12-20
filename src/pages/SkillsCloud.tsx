import React, { useEffect, useRef } from "react";
import WordCloud from "3d-word-cloud";

const SkillsCloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const wordCloud = WordCloud(containerRef.current, {
        entries: [
          { label: "HTML", url: "#" },
          { label: "CSS", url: "#" },
          { label: "JavaScript", url: "#" },
          { label: "React", url: "#" },
          { label: "Node.js", url: "#" },
          { label: "TypeScript", url: "#" },
          { label: "Python", url: "#" },
          { label: "Flutter", url: "#" },
          { label: "MongoDB", url: "#" },
          { label: "Firebase", url: "#" },
        ],
        width: 400,
        height: 400,
        radius: "50%",
        speed: 0.5,
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
        fontSize: "16px",
        tooltip: "native", // Enable tooltips for each word
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        margin: "0 auto",
      }}
    ></div>
  );
};

export default SkillsCloud;
