import { useRef, useEffect, useState } from "react";

interface Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
}
//this component needs to be updated to add new balls on mouse click
const BallsInteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [balls, setBalls] = useState<Ball[]>([
    {
      x: 100,
      y: 100,
      dx: 1.5,
      dy: 2,
      radius: 50,
      color: "#FF4136",
    },
    {
      x: 500,
      y: 200,
      dx: -1,
      dy: 1,
      radius: 40,
      color: "#0074D9",
    },
    {
      x: 300,
      y: 400,
      dx: 1,
      dy: -1.5,
      radius: 30,
      color: "#2ECC40",
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
          ball.dx = Math.max(-2, Math.min(ball.dx, 2));
          ball.dy = Math.max(-2, Math.min(ball.dy, 2));
        }

        // Bounce off the walls
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy;
        }

        //make balls gradualy slow down after 3 seconds
        if (ball.dx > 0) {
          ball.dx -= 0.0001;
        } else {
          ball.dx += 0.0001;
        }
        if (ball.dy > 0) {
          ball.dy -= 0.0001;
        } else {
          ball.dy += 0.0001;
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

    // Resize the canvas when the screen size changes
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Start the animation
    animate();

    // Return a cleanup function to remove the animation on unmount
    //@ts-ignore
    return () => cancelAnimationFrame(animate);
  }, [balls]);

  //Detect mouse click and add new ball
  useEffect(() => {
    // Add a new ball on click
    function addBall(event: any) {
      const padding = 50; // Padding from the wall
      const newBall = {
        // Start the ball at the bottom right of the screen with padding
        x: window.innerWidth - padding,
        y: window.innerHeight - padding,
        // Calculate the velocity vector towards the mouse click position
        dx: (event.clientX - (window.innerWidth - padding)) / 50,
        dy: (event.clientY - (window.innerHeight - padding)) / 50,
        // Randomize the radius
        radius: Math.floor(Math.random() * 50) + 10,
        // Randomize the color
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      };
      setBalls([...balls, newBall]);
    }

    //detect mouse click
    window.addEventListener("click", addBall);
    // Return a cleanup function to remove the event listener on unmount
    return () => window.removeEventListener("click", addBall);
  }, []);

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