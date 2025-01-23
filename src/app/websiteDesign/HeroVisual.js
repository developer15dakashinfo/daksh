import React, { useEffect, useRef, useState }  from 'react';
import "./HeroVisual.js";

const HeroVisual = () => {
  const [isMouseOnCanvas, setIsMouseOnCanvas] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasContainerRef = useRef(null);
  const canvasRef = useRef({ a: null, b: null });
  const ctxRef = useRef({ a: null, b: null });
  const particlePropsRef = useRef(new Float32Array(0));
  const tickRef = useRef(0);

  const config = {
    particleCount: 100,
    particlePropCount: 9,
    baseTTL: 1,
    rangeTTL: 2,
    baseSpeed: 0.001,
    rangeSpeed: 0.002,
    circularSpeed: 0.001,
    baseRadius: 2,
    rangeRadius: 3,
    baseHue: 220,
    rangeHue: 120,
    backgroundColor: '#111827',
    circleRadius: 250,
    glowStrength: 10,
    randomnessFactor: 4,
    trailLength: 10.2,
    mouseForce: 2,
    mouseRadius: 200,
  };

  const TAU = Math.PI * 2;

  
  const rand = (n) => Math.random() * n;

  const initParticles = () => {
    const particleProps = new Float32Array(config.particleCount * config.particlePropCount);
    const angleIncrement = TAU / config.particleCount;

    for (let i = 0; i < config.particleCount; i++) {
      const angleOffset = i * angleIncrement;
      initParticle(particleProps, i * config.particlePropCount, angleOffset);
    }

    particlePropsRef.current = particleProps;
  };

  const initParticle = (particleProps, i, angleOffset) => {
    const radius = config.baseRadius + rand(config.rangeRadius);
    const hue = config.baseHue + rand(config.rangeHue);

    particleProps.set(
      [
        Math.cos(angleOffset) * config.circleRadius + canvasRef.current.a.width / 2,
        Math.sin(angleOffset) * config.circleRadius + canvasRef.current.a.height / 2,
        0, 0, 0,
        config.baseTTL + rand(config.rangeTTL),
        config.baseSpeed + rand(config.rangeSpeed),
        radius, hue,
      ],
      i
    );
  };

  const drawParticles = () => {
    const centerX = canvasRef.current.a.width / 2;
    const centerY = canvasRef.current.a.height / 2;

    for (let i = 0; i < config.particleCount * config.particlePropCount; i += config.particlePropCount) {
      updateParticle(i, centerX, centerY);
    }
  };

  const updateParticle = (i, centerX, centerY) => {
    const angle = tickRef.current * config.circularSpeed + (i / config.particlePropCount) * TAU / config.particleCount;
    const scatterX = Math.sin(tickRef.current * 0.05 + i) * 10 * config.randomnessFactor;
    const scatterY = Math.cos(tickRef.current * 0.05 + i) * 10 * config.randomnessFactor;

    let x = Math.cos(angle) * config.circleRadius + centerX + scatterX;
    let y = Math.sin(angle) * config.circleRadius + centerY + scatterY;

  
    if (isMouseOnCanvas) {
      const dx = mousePos.x - x;
      const dy = mousePos.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.mouseRadius) {
        const force = (1 - distance / config.mouseRadius) * config.mouseForce;
        x += dx * force;
        y += dy * force;
      }
    }

    // Update particle position
    particlePropsRef.current[i] = x;
    particlePropsRef.current[i + 1] = y;

    // Draw the particle
    drawParticle(x, y, particlePropsRef.current[i + 7], particlePropsRef.current[i + 8]);
  };

  const drawParticle = (x, y, radius, hue) => {
    ctxRef.current.a.save();
    ctxRef.current.a.fillStyle = `hsla(${hue},100%,60%,${config.trailLength})`;
    ctxRef.current.a.beginPath();
    ctxRef.current.a.arc(x, y, radius, 0, TAU);
    ctxRef.current.a.fill();
    ctxRef.current.a.restore();
  };

  const renderGlow = () => {
    const blur1 = `blur(${config.glowStrength}px) brightness(200%)`;
    const blur2 = `blur(${config.glowStrength / 2}px) brightness(200%)`;

    ctxRef.current.b.save();
    ctxRef.current.b.filter = blur1;
    ctxRef.current.b.globalCompositeOperation = 'lighter';
    ctxRef.current.b.drawImage(canvasRef.current.a, 0, 0);
    ctxRef.current.b.restore();

    ctxRef.current.b.save();
    ctxRef.current.b.filter = blur2;
    ctxRef.current.b.globalCompositeOperation = 'lighter';
    ctxRef.current.b.drawImage(canvasRef.current.a, 0, 0);
    ctxRef.current.b.restore();
  };

  const renderToScreen = () => {
    ctxRef.current.b.save();
    ctxRef.current.b.globalCompositeOperation = 'lighter';
    ctxRef.current.b.drawImage(canvasRef.current.a, 0, 0);
    ctxRef.current.b.restore();
  };

  const draw = () => {
    tickRef.current++;
    ctxRef.current.a.clearRect(0, 0, canvasRef.current.a.width, canvasRef.current.a.height);
    ctxRef.current.b.fillStyle = config.backgroundColor;
    ctxRef.current.b.fillRect(0, 0, canvasRef.current.a.width, canvasRef.current.a.height);

    drawParticles();
    renderGlow();
    renderToScreen();
    requestAnimationFrame(draw);
  };

  const createCanvas = () => {
    const container = canvasContainerRef.current;
    const canvas = { a: document.createElement('canvas'), b: document.createElement('canvas') };
    const ctx = { a: canvas.a.getContext('2d'), b: canvas.b.getContext('2d') };

    container.appendChild(canvas.a);
    container.appendChild(canvas.b);

    canvas.a.style.position = 'absolute';
    canvas.a.style.top = 0;
    canvas.a.style.left = 0;

    canvasRef.current = canvas;
    ctxRef.current = ctx;

    canvas.a.addEventListener('mousemove', mouseHandler);
    canvas.a.addEventListener('mouseenter', () => setIsMouseOnCanvas(true));
    canvas.a.addEventListener('mouseleave', () => setIsMouseOnCanvas(false));
  };

  const mouseHandler = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const resize = () => {
    const { innerWidth, innerHeight } = window;
    canvasRef.current.a.width = innerWidth;
    canvasRef.current.a.height = innerHeight;
    canvasRef.current.b.width = innerWidth;
    canvasRef.current.b.height = innerHeight;
    ctxRef.current.a.clearRect(0, 0, innerWidth, innerHeight);
    ctxRef.current.b.clearRect(0, 0, innerWidth, innerHeight);
  };

  useEffect(() => {
    createCanvas();
    resize();
    initParticles();
    draw();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div>
      <div className="content--canvas" ref={canvasContainerRef}></div>
      <section className="hero">
        <h1>Transform Your Ideas into Reality with AI-Powered Solutions</h1>
        <a href="https://sohrabzia.github.io/" target="_blank" rel="noopener noreferrer">
          SOHARAB ZIA
        </a>
      </section>
    </div>
  )
}

export default HeroVisual