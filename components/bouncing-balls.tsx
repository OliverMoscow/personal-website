import { useRef, useEffect } from "react";

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

const balls: Ball[] = [
  {
    x: 100,
    y: 100,
    dx: 1,
    dy: 0.5,
    radius: 45,
    color: "#FF4136",
  },
  {
    x: 150,
    y: 200,
    dx: -0.5,
    dy: 1,
    radius: 32,
    color: "#0074D9",
  },
  {
    x: 200,
    y: 450,
    dx: 0.5,
    dy: -0.5,
    radius: 27,
    color: "#2ECC40",
  },
  {
    x: 100,
    y: 400,
    dx: -1,
    dy: -0.5,
    radius: 15,
    color: "#cba9db",
  },
  {
    x: 100,
    y: 600,
    dx: 0.5,
    dy: -1.5,
    radius: 75,
    color: "#d1d98f",
  },
];

const BallsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ... (rest of the code remains the same)
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    console.log('Canvas clicked!', event.clientX, event.clientY);
  };

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      onClick={handleClick}
    />
  );
};

export default BallsBackground;
