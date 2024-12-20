import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import Fluid from "webgl-fluid";

// Forward ref to allow the parent to call splat
const FluidAnimation = forwardRef((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let fluidInstance: any;

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      fluidInstance = Fluid(canvas);

      if (!fluidInstance) {
        console.error("Failed to initialize Fluid instance.");
        return;
      }
    }
  }, []);

  // Expose the splat method to the parent
  useImperativeHandle(ref, () => ({
    splat(x: number, y: number, dx: number, dy: number) {
      if (fluidInstance) {
        fluidInstance.splat(x, y, dx, dy);
      }
    },
  }));

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(239, 239, 239)",
      }}
    />
  );
});

export default FluidAnimation;
