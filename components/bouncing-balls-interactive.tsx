import { useRef, useEffect, useState } from "react";

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}

const BallsInteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [balls, setBalls] = useState<Ball[]>([
    {
      x: 100,
      y: 100,
      dx: 1.5,
      dy: 2,
      radius: 50,
      color: "#48BB78", // Tailwind CSS green color
    },
    {
      x: 500,
      y: 200,
      dx: -1,
      dy: 1,
      radius: 40,
      color: "#48BB78",
    },
    {
      x: 300,
      y: 400,
      dx: 1,
      dy: -1.5,
      radius: 30,
      color: "#48BB78",
    },
  ]);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
        for (let i = index + 1; i < balls.length; i++) {
          const otherBall = balls[i];
          const distance = Math.sqrt(
            (ball.x - otherBall.x) ** 2 + (ball.y - otherBall.y) ** 2
          );
          if (distance < ball.radius + otherBall.radius) {
            const tempDx = ball.dx;
            const tempDy = ball.dy;
            ball.dx = otherBall.dx;
            ball.dy = otherBall.dy;
            otherBall.dx = tempDx;
            otherBall.dy = tempDy;
          }
        }

        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy;
        }

        ball.x += ball.dx;
        ball.y += ball.dy;
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBalls();
      updateBalls();
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    animate();
//@ts-ignore
    return () => cancelAnimationFrame(animate);
  }, [balls]);

  useEffect(() => {
    function addBall(event: any) {
      const padding = 50;
      const newBall = {
        x: window.innerWidth - padding,
        y: window.innerHeight - padding,
        dx: (event.clientX - (window.innerWidth - padding)) / 150, // Slower initial velocity
        dy: (event.clientY - (window.innerHeight - padding)) / 150, // Slower initial velocity
        radius: Math.floor(Math.random() * 50) + 10,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      };
      setBalls([...balls, newBall]);
    }

    window.addEventListener("click", addBall);
    return () => window.removeEventListener("click", addBall);
  }, [balls]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      />
    </>
  );
};

export default BallsInteractiveBackground;
