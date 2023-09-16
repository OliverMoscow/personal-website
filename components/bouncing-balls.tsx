import React, { useRef, useEffect, useLayoutEffect, useState } from "react";

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

interface BallsBackgroundProps {
  children: React.ReactNode;
}

const BallsBackground: React.FC<BallsBackgroundProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw the balls
    function drawBalls() {
      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
      });
    }

    // Update the ball positions and velocities
    function updateBalls() {
      balls.forEach((ball, index) => {
        // Check for collisions with other balls
        for (let i = index + 1; i < balls.length; i++) {
          const otherBall = balls[i];
          const distance = Math.sqrt(
            (ball.x - otherBall.x) ** 2 + (ball.y - otherBall.y) ** 2
          );
          if (distance < ball.radius + otherBall.radius) {
            // Balls have collided, reverse their velocities
            const tempDx = ball.dx;
            const tempDy = ball.dy;
            ball.dx = otherBall.dx;
            ball.dy = otherBall.dy;
            otherBall.dx = tempDx;
            otherBall.dy = tempDy;
          }
        }

        // Bounce off the walls
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy;
        }

        // Update the ball position
        ball.x += ball.dx;
        ball.y += ball.dy;
      });
    }

    // Clear the canvas and redraw the balls
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBalls();
      updateBalls();
      requestAnimationFrame(animate);
    }

    animate();
    //@ts-ignore
    return () => cancelAnimationFrame(animate);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    console.log("Canvas clicked!", event.clientX, event.clientY);
  };

  // Use useLayoutEffect to measure the container size after render
  useLayoutEffect(() => {
    const measureContainer = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // You can use this rect to update the canvas width and height as needed.
      }
    };

    measureContainer();
    window.addEventListener("resize", measureContainer);

    return () => {
      window.removeEventListener("resize", measureContainer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        onClick={handleClick}
      />
      {children}
    </div>
  );
};

export default BallsBackground;
