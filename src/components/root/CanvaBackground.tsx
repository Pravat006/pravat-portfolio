"use client";

import { useEffect, useRef } from "react";

const STAR_DENSITY = 0.0003; // More stars per pixel
const SPEED = 0.6; // Faster random movement

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const generateStars = (count: number) =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width, // Random x position
        y: Math.random() * canvas.height, // Random y position
        radius: Math.random() * 1 + 0.2, // Smaller snowflakes
        speedX: (Math.random() - 0.5) * SPEED, // Random horizontal speed
        speedY: (Math.random() - 0.5) * SPEED, // Random vertical speed
      }));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = generateStars(Math.floor(canvas.width * canvas.height * STAR_DENSITY));
      drawBackground();
    };

    let stars = generateStars(Math.floor(canvas.width * canvas.height * STAR_DENSITY));

    const drawBackground = () => {
      // Radial gradient for top nebula glow (light at the top)
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, -canvas.height / 3, 50, // Glow centered **above** the screen
        canvas.width / 2, canvas.height / 2, canvas.width // Expanding downward
      );

      gradient.addColorStop(0, "#ffffcc"); // Soft yellowish-white glow at the top
      gradient.addColorStop(0.3, "#d4cfc3"); // Smooth muted transition
      gradient.addColorStop(0.6, "#4d4a45"); // Nebula grayish tone
      gradient.addColorStop(1, "#0d0d0e"); // Dark space at the bottom

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Extended glow for smooth transition
        const extendedGlow = ctx.createRadialGradient(
            canvas.width / 2, -canvas.height / 4, 100, // Above screen for extended effect
            canvas.width / 2, canvas.height / 2, canvas.width * 0.9
        );

      extendedGlow.addColorStop(0, "rgba(255, 255, 204, 0.2)"); // Faint soft glow
      extendedGlow.addColorStop(1, "rgba(13, 13, 14, 0)"); // Smooth fade

      ctx.fillStyle = extendedGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      drawBackground();

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white"; // White snowflakes
        ctx.fill();

        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full z-0" />;
};

export default CanvasBackground;
