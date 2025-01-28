
import { useState, useEffect, useRef } from "react";

import icon1 from "../../assets/css.svg";
import icon2 from "../../assets/react.svg";
import icon3 from "../../assets/node.svg";
import icon4 from "../../assets/php.svg";
import icon5 from "../../assets/nextjs.svg";
import icon6 from "../../assets/wordpress.svg";
import icon7 from "../../assets/laravel.svg";
import icon8 from "../../assets/flutter.svg";
import Image from "next/image";
import ReadMoreButton from "@/app/readmore/ReadMoreButton";
import SlidingButton from "@/app/SlidingButton/SlidingButton";

const BALL_COUNT = 20;
const BALL_RADIUS = 135;
const BLUE_BALL_POSITION =
  typeof window !== "undefined"
    ? { x: window.innerWidth / 2, y: window.innerHeight / 3 }
    : { x: 0, y: 0 }; // Default values for SSR

const BLUE_BALL_RADIUS = 289;
const REPULSION_FORCE = 0.1; // Control the strength of repulsion
const GRAVITY = 0.3;
const FRICTION = 0.95;
const ballImages = [ icon1, icon2,icon3,icon4,icon5,icon6,icon7,icon8];

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

  const sectionRef = useRef(null);
  const [animateLetters, setAnimateLetters] = useState(false);
  const [counts, setCounts] = useState({ agents: 0, artists: 0, shows: 0 ,support:0});

  useEffect(() => {
    const btnContact = document.querySelectorAll("#contact_btn");

    btnContact.forEach((btnText) => {
      const text = btnText.querySelector("p");

      if (text) {
        text.innerHTML = text.innerHTML
          .split("")
          .map(
            (character, index) =>
              `<span className="absolute origin-[0.3rem_5rem]" style="transform: rotate(${
                index * 12
              }deg)">${character}</span>`
          )
          .join("");
      }
    });
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimateLetters(true);
      }
    }, { threshold: 0.5 });
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  
  useEffect(() => {
    if (animateLetters) {
      const animate = () => {
        applyPhysics();
        requestAnimationFrame(animate);
      };
      animate();
    }
  }, [animateLetters]);
  

  const animateCounter = (key, start, end, duration) => {
    const increment = (end - start) / (duration / 50);
    const interval = setInterval(() => {
      setCounts((prev) => {
        if (prev[key] < end) {
          return { ...prev, [key]: Math.min(prev[key] + increment, end) };
        }
        clearInterval(interval);
        return prev;
      });
    }, 50);
  };

  useEffect(() => {
    if (animateLetters) {
      animateCounter("agents", 0, 1, 1000);
      animateCounter("artists", 0, 2, 1000); 
      animateCounter("shows", 0, 3, 1000); 
      animateCounter("support", 0, 4, 1000); 
    }
  }, [animateLetters]);

  const splitDigits = (num, key) => {
    const formattedNum = Math.floor(num);      
    return { staticPart: null, lastDigit: formattedNum };
  };

  const counters = [
    {
      key: "agents",
      suffix: "STEP:",
      heading: "ANALYSIS",
      paragraph: "The process of gathering, examining, and interpreting requirements to understand the problem that needs to be solved.",
      bgColor: "bg-blue-400",
    },
    {
      key: "artists",
      suffix: "STEP:",
      heading: "DESIGN",
      paragraph: "Translating the requirements gathered during analysis into a detailed plan or blueprint for building the solution.",
      bgColor: "bg-teal-300",
    },
    {
      key: "shows",
      suffix: "STEP:",
      heading: "DEVELOPMENT",
      paragraph: "The actual creation of the product or system based on the design specifications.",
      bgColor: "bg-violet-400",
    },
    {
      key: "support",
      suffix: "STEP:",
      heading: "SUPPORT",
      paragraph: "Ongoing maintenance and assistance provided to ensure the solution operates effectively after deployment.",
      bgColor: "bg-orange-400",
    },
  ];

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
            ball.vy *= -0.9; // Invert velocity for bounce
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
    const targets = [
      { id: "starsCount", count: 850, suffix: "+" },
      { id: "downloadsCount", count: 80000, suffix: "+" },
      { id: "sponsorsCount", count: 100, suffix: "+" },
    ];

    const maxCount = Math.max(...targets.map((target) => target.count));

    // Function to animate count-up effect
    const animateCountUp = (target, duration) => {
      let currentCount = 0;
      const increment = Math.ceil(target.count / (duration / 10));
      const element = document.getElementById(target.id);

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
          clearInterval(interval);
          currentCount = target.count;
          element.textContent = currentCount + target.suffix;
        } else {
          element.textContent = currentCount;
        }
      }, 10);
    };

    // Animate count-up for each target with adjusted duration
    targets.forEach((target) => {
      animateCountUp(target, maxCount / 50); // Adjust duration based on max count
    });
  }, []);

  return (
   <>
 <div className="relative ">

 <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 pt-4 absolute -top-36 w-full "
    
    >
      {counters.map((data, idx) => {
        const { staticPart, lastDigit } = splitDigits(counts[data.key], data.key);

        return (
          <div
            key={idx}
            className={`col-span-1 p-8  rounded-2xl ${data.bgColor}`}
          >
            <h1 className="text-3xl text-black font-extrabold">
              <div className="flex">
                {staticPart !== null && (
                  <span className="text-black">{staticPart}</span>
                )}
                <div className="overflow-hidden flex">
                <div className="me-2 text-white">{data.suffix}</div>
                  <div className="flex flex-col justify-center items-center h-[60px] w-[40px] relative overflow-hidden">
                    {[...Array(10).keys()].map((num) => (
                      <span
                        key={num} 
                        className="absolute text-center text-white font-extrabold"
                        style={{
                          top: `${num * 54}px`,
                          transform: `translateY(${
                            isNaN(lastDigit) ? 0 : -lastDigit * 54
                          }px)`,
                          transition: "transform 0.6s ease-out",
                        }}
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
               
              </div>
            </h1>
            <h2 className="text-3xl text-black font-extrabold">
              {data.heading}
            </h2>
            <p className="text-xl text-black font-bold pt-10">{data.paragraph}</p>
          </div>
        );
      })}
    </div>
 </div>

 <div
  className="overflow-hidden relative mt-60"
  style={{
    height: "100vh",
    position: "relative",
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
      left: "50%",
      top: "33%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <div className="flex flex-col p-6 text-center border-b mt-40 border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
      <dt className="order-2 mt-2 text-xl leading-6 text-gray-500 dark:text-gray-400" id="item-1">
        Complete Projects, Let's Discuss Your Project
      </dt>
      <dd className="order-1 text-7xl font-semibold leading-none text-black dark:text-black" id="starsCount">
        0
      </dd>
    </div>

    <div className="flex justify-center mt-4">
      <SlidingButton text="Read More" bgColor="bg-black" textcolor="text-white"/>
    </div>
  </div>

  {balls.map((ball) => (
    <div
      key={ball.id}
      className="shadow-xl lg:flex hidden"
      style={{
        width: `${BALL_RADIUS * 2}px`,
        height: `${BALL_RADIUS * 2}px`,
        borderRadius: "50%",
        position: "absolute",
        left: `${ball.x}px`,
        top: `${ball.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseDown={(e) => handleMouseDown(ball.id, e)}
    >
      <Image
        src={ball.image}
        alt={`Ball ${ball.id}`}
        width={BALL_RADIUS * 2}
        height={BALL_RADIUS * 2}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  ))}
</div>

    
    <div className="dark:bg-gray-900 hidden">
      <div className="pt-12 bg-gray-50 dark:bg-gray-900 sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
              Trusted by developers
            </h2>
            <p className="mt-3 text-xl leading-7 text-gray-600 dark:text-gray-400 sm:mt-4">
              This package powers many production applications on many different hosting platforms.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-gray-50 dark:bg-gray-900 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                    <dt
                      className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400"
                      id="item-1"
                    >
                      Stars on GitHub
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      id="starsCount"
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Downloads
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      id="downloadsCount"
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Sponsors
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      id="sponsorsCount"
                    >
                      0
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Home2;

