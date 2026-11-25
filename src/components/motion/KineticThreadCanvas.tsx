"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function KineticThreadCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates for interactive thread wave deflection
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    // 5 Living Threads Configuration (Electric Cobalt, Sicilian Flame, Botanical Jade, Haute Citron, Soft Wisteria)
    const threads = [
      { yRatio: 0.35, amplitude: 35, frequency: 0.002, speed: 0.015, color: "rgba(0, 56, 255, 0.24)", width: 2 },
      { yRatio: 0.45, amplitude: 50, frequency: 0.0018, speed: 0.012, color: "rgba(255, 77, 38, 0.22)", width: 2.5 },
      { yRatio: 0.55, amplitude: 40, frequency: 0.0022, speed: 0.018, color: "rgba(10, 148, 105, 0.20)", width: 2 },
      { yRatio: 0.65, amplitude: 60, frequency: 0.0015, speed: 0.010, color: "rgba(216, 242, 66, 0.28)", width: 2 },
      { yRatio: 0.75, amplitude: 45, frequency: 0.0025, speed: 0.014, color: "rgba(124, 77, 255, 0.16)", width: 1.5 },
    ];

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      time += 1;

      threads.forEach((t) => {
        ctx.beginPath();
        ctx.strokeStyle = t.color;
        ctx.lineWidth = t.width;

        const baseY = height * t.yRatio;

        for (let x = 0; x <= width; x += 6) {
          // Natural sinusoidal undulation
          let wave = Math.sin(x * t.frequency + time * t.speed) * t.amplitude;
          wave += Math.cos(x * t.frequency * 0.5 + time * t.speed * 0.7) * (t.amplitude * 0.4);

          // Interactive mouse deflection
          const dx = x - mouse.x;
          const dy = (baseY + wave) - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 45;
            wave -= (dy / (dist || 1)) * force;
          }

          const y = baseY + wave;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0 opacity-80"
    />
  );
}
