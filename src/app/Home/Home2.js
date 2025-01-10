
import { useState, useEffect, useRef } from "react";
import node from "../assets/node.svg"


const BALL_COUNT = 20;
const BALL_RADIUS = 135;
const BLUE_BALL_POSITION = { x: window.innerWidth / 2, y: window.innerHeight / 3 };
const BLUE_BALL_RADIUS = 289;
const REPULSION_FORCE = 0.1; // Control the strength of repulsion
const GRAVITY = 0.5;
const FRICTION = 0.95;

const ballImages = [
  "https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png",
  "https://icon2.cleanpng.com/20180519/ago/kisspng-php-development-tools-software-development-softwar-5b00d8a2007696.9490122915267821140019.jpg",
  "https://w7.pngwing.com/pngs/784/624/png-transparent-js-logo-node-logos-and-brands-icon.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZwy15zQ0RCtIzVpoHcj6_ou23J5QsA9Bxw&s",
];

const Home2 = () => {
  const [balls, setBalls] = useState(
    Array.from({ length: BALL_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * (window.innerWidth - BALL_RADIUS * 2),
      y: -Math.random() * 900, // Start above the viewport
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 2,
      isDragging: false,
      offset: { x: 0, y: 0 },
      image: ballImages[i % ballImages.length],
    }))
  );

 


  

  const handleMouseDown = (id, event) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) =>
        ball.id === id
          ? { ...ball, isDragging: true, offset: { x: event.clientX - ball.x, y: event.clientY - ball.y } }
          : ball
      )
    );
  };

  const handleMouseMove = (event) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) => {
        if (!ball.isDragging) return ball;

        const newX = event.clientX - ball.offset.x;
        const newY = event.clientY - ball.offset.y;

        const dx = newX - BLUE_BALL_POSITION.x;
        const dy = newY - BLUE_BALL_POSITION.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < BLUE_BALL_RADIUS + BALL_RADIUS) {
          const angle = Math.atan2(dy, dx);
          return {
            ...ball,
            x: BLUE_BALL_POSITION.x + Math.cos(angle) * (BLUE_BALL_RADIUS + BALL_RADIUS),
            y: BLUE_BALL_POSITION.y + Math.sin(angle) * (BLUE_BALL_RADIUS + BALL_RADIUS),
          };
        }

        return { ...ball, x: newX, y: newY };
      })
    );
  };

  const handleMouseUp = () => {
    setBalls((prevBalls) => prevBalls.map((ball) => ({ ...ball, isDragging: false })));
  };

  const applyPhysics = () => {
    setBalls((prevBalls) => {
      const updatedBalls = [...prevBalls];

      // Apply pairwise repulsion
      for (let i = 0; i < updatedBalls.length; i++) {
        for (let j = i + 1; j < updatedBalls.length; j++) {
          const ballA = updatedBalls[i];
          const ballB = updatedBalls[j];

          const dx = ballB.x - ballA.x;
          const dy = ballB.y - ballA.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < BALL_RADIUS * 2) {
            const overlap = BALL_RADIUS * 2 - distance;
            const angle = Math.atan2(dy, dx);

            // Calculate force and push the balls apart
            const force = REPULSION_FORCE * overlap;
            const fx = Math.cos(angle) * force;
            const fy = Math.sin(angle) * force;

            ballA.vx -= fx;
            ballA.vy -= fy;
            ballB.vx += fx;
            ballB.vy += fy;
          }
        }
      }

      // Apply gravity, friction, and movement
      updatedBalls.forEach((ball) => {
        if (!ball.isDragging) {
          ball.vy += GRAVITY;
          ball.vx *= FRICTION;
          ball.vy *= FRICTION;

          ball.x += ball.vx;
          ball.y += ball.vy;

          // Prevent overlap with blue ball
          const dxToBlue = ball.x - BLUE_BALL_POSITION.x;
          const dyToBlue = ball.y - BLUE_BALL_POSITION.y;
          const distanceToBlue = Math.sqrt(dxToBlue * dxToBlue + dyToBlue * dyToBlue);

          if (distanceToBlue < BLUE_BALL_RADIUS + BALL_RADIUS) {
            const angle = Math.atan2(dyToBlue, dxToBlue);
            ball.x = BLUE_BALL_POSITION.x + Math.cos(angle) * (BLUE_BALL_RADIUS + BALL_RADIUS);
            ball.y = BLUE_BALL_POSITION.y + Math.sin(angle) * (BLUE_BALL_RADIUS + BALL_RADIUS);
            ball.vx = 0;
            ball.vy = 0;
          }

          // Bounce on floor
          if (ball.y > window.innerHeight - BALL_RADIUS) {
            ball.y = window.innerHeight - BALL_RADIUS;
            ball.vy *= -0.6; // Invert velocity for bounce
          }

          // Keep within horizontal bounds
          if (ball.x < BALL_RADIUS) ball.x = BALL_RADIUS;
          if (ball.x > window.innerWidth - BALL_RADIUS) ball.x = window.innerWidth - BALL_RADIUS;
        }
      });

      return updatedBalls;
    });
  };

  useEffect(() => {
    const animate = () => {
      applyPhysics();
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div
      className="overflow-hidden mt-5"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "white",
        overflow: "hidden",
        cursor: "grab",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="shadow-xl relative border-3"
        style={{
          width: `${BLUE_BALL_RADIUS * 2}px`,
          height: `${BLUE_BALL_RADIUS * 2}px`,
          backgroundColor: "#FFEC89",
          borderRadius: "50%",
          position: "absolute",
          left: `50%`,
          top: `33%`,
          transform: "translate(-50%, -50%)",
        }}
      >



      </div>

      {balls.map((ball) => (
        <div
          key={ball.id}
          className="shadow-xl lg:flex hidden"
          style={{
            backgroundImage: `url(${ball.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: `${BALL_RADIUS * 2}px`,
            height: `${BALL_RADIUS * 2}px`,
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: "#F3F3F3",
            left: `${ball.x}px`,
            top: `${ball.y}px`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={(e) => handleMouseDown(ball.id, e)}
        ></div>
      ))}
    </div>
  );
};

export default Home2;




