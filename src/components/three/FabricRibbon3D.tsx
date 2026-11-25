"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * FabricRibbon3D
 * Signature Awwwards-grade continuous flowing fabric ribbon for NOVUS APPAREL.
 * Weaves smoothly across the viewport, transforming through 5 distinct storytelling stages:
 * THREAD → FABRIC → MATERIAL INNOVATION → APPAREL → MANUFACTURING NETWORK
 * Features dual-sided silk shading (Olive Green #69744B & Burnt Orange #D76C3F).
 */
export default function FabricRibbon3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    try {
      const testCanvas = document.createElement("canvas");
      const hasWebGL = !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
      );
      if (hasWebGL) setCanRender(true);
    } catch {
      setCanRender(false);
    }
  }, []);

  useEffect(() => {
    if (!canRender || !canvasRef.current) return;

    const canvas = canvasRef.current;
    let animationId: number;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xf3ebdd, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff7ea, 1.5);
    dirLight1.position.set(4, 6, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd76c3f, 0.85);
    dirLight2.position.set(-5, -4, 3);
    scene.add(dirLight2);

    // Mouse tracking with spring inertia
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * -2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll tracking
    let scrollYProgress = 0;
    let targetScroll = 0;

    const handleScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      targetScroll = window.scrollY / maxScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Parametric Ribbon Mesh with 5-stage transformation geometry
    const segments = 120;

    const createRibbonGeometry = (
      time: number,
      scroll: number,
      mx: number,
      my: number
    ) => {
      const positions: number[] = [];
      const normals: number[] = [];
      const uvs: number[] = [];
      const indices: number[] = [];

      // Calculate stage morph factors:
      // Stage 1: THREAD (0.00 - 0.20) -> tight filament wave
      // Stage 2: FABRIC (0.20 - 0.40) -> expanding woven structure
      // Stage 3: INNOVATION (0.40 - 0.60) -> dynamic dual-core elasticity
      // Stage 4: APPAREL (0.60 - 0.80) -> tailored drape curves
      // Stage 5: MANUFACTURING NETWORK (0.80 - 1.00) -> wide coordinated flow
      const baseWidth = 0.35 + scroll * 0.55;
      const waveFreq = 2.4 + Math.sin(scroll * Math.PI) * 1.2;

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const wave1 = Math.sin(t * Math.PI * waveFreq + time * 0.9 + scroll * 4.8);
        const wave2 = Math.cos(t * Math.PI * 1.8 - time * 0.6 + scroll * 3.2);

        // Core spine positioning across viewport
        const px = (t - 0.5) * 11.5 + mx * 0.85 * Math.sin(t * Math.PI);
        const py =
          wave1 * 1.45 + wave2 * 0.5 + (0.5 - scroll) * 3.2 + my * 0.45;
        const pz =
          Math.cos(t * Math.PI * 2.6 + time * 0.45) * 1.6 - (1 - t) * 0.9;

        // Tangent & Binormal calculations
        const tx = 1.0;
        const ty = Math.cos(t * Math.PI * waveFreq + time * 0.9) * 1.45;
        const tz = -Math.sin(t * Math.PI * 2.6 + time * 0.45) * 1.6;

        const normal = new THREE.Vector3(-ty, tx, tz * 0.25).normalize();
        const binormal = new THREE.Vector3(0, 0, 1).cross(normal).normalize();

        // Tapered edge width modulation
        const taper = Math.sin(t * Math.PI);
        const currentWidth = baseWidth * (0.3 + 0.7 * taper);

        // Vertices
        const v1x = px + binormal.x * currentWidth;
        const v1y = py + binormal.y * currentWidth;
        const v1z = pz + binormal.z * currentWidth;

        const v2x = px - binormal.x * currentWidth;
        const v2y = py - binormal.y * currentWidth;
        const v2z = pz - binormal.z * currentWidth;

        positions.push(v1x, v1y, v1z);
        positions.push(v2x, v2y, v2z);

        normals.push(normal.x, normal.y, normal.z);
        normals.push(normal.x, normal.y, normal.z);

        uvs.push(t, 0);
        uvs.push(t, 1);

        if (i < segments) {
          const idx = i * 2;
          indices.push(idx, idx + 1, idx + 2);
          indices.push(idx + 1, idx + 3, idx + 2);
        }
      }

      const geom = new THREE.BufferGeometry();
      geom.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geom.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
      geom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
      geom.setIndex(indices);
      geom.computeVertexNormals();
      return geom;
    };

    // Custom Luxury Silk Shader with Scroll Stage Color Morphing
    const ribbonMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uOlive: { value: new THREE.Color(0x69744b) },
        uBurnt: { value: new THREE.Color(0xd76c3f) },
        uCream: { value: new THREE.Color(0xf3ebdd) },
        uSage: { value: new THREE.Color(0xb9bea4) },
        uOpacity: { value: 0.68 },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uScroll;
        uniform vec3 uOlive;
        uniform vec3 uBurnt;
        uniform vec3 uCream;
        uniform vec3 uSage;
        uniform float uOpacity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);

          // Dynamic wave transition
          float waveTransition = sin(vUv.x * 6.283 + uTime * 0.7) * 0.5 + 0.5;
          
          // Scroll-dependent color journey:
          // Early scroll: Olive dominant with Sage undertones (Thread & Fabric)
          // Mid scroll: Burnt Orange accents flare (Innovation & Apparel)
          // Late scroll: Harmonized Olive-Burnt blend (Manufacturing Network)
          vec3 activeColor = mix(uOlive, uBurnt, waveTransition * 0.6 + uScroll * 0.4);
          activeColor = mix(activeColor, uSage, sin(vUv.x * 3.1415 + uTime * 0.3) * 0.2);

          // Specular highlights for lustrous satin hand-feel
          vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
          vec3 halfDir = normalize(lightDir + viewDir);
          float spec = pow(max(dot(normal, halfDir), 0.0), 36.0);

          // Fresnel edge rim for dimensional silk depth
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.4);

          vec3 finalColor = activeColor * (0.55 + 0.45 * max(dot(normal, lightDir), 0.0));
          finalColor += uCream * spec * 0.45;
          finalColor += uBurnt * fresnel * 0.38;

          // Edge fade
          float edgeAlpha = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);
          float alpha = uOpacity * edgeAlpha * (0.8 + 0.2 * fresnel);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    let currentGeometry = createRibbonGeometry(0, 0, 0, 0);
    const ribbonMesh = new THREE.Mesh(currentGeometry, ribbonMaterial);
    scene.add(ribbonMesh);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth inertia
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollYProgress += (targetScroll - scrollYProgress) * 0.05;

      // Update uniforms
      ribbonMaterial.uniforms.uTime.value = elapsed;
      ribbonMaterial.uniforms.uScroll.value = scrollYProgress;

      // Regenerate dynamic ribbon geometry
      const newGeom = createRibbonGeometry(
        elapsed,
        scrollYProgress,
        mouseX,
        mouseY
      );
      ribbonMesh.geometry.dispose();
      ribbonMesh.geometry = newGeom;
      currentGeometry = newGeom;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      currentGeometry.dispose();
      ribbonMaterial.dispose();
      renderer.dispose();
    };
  }, [canRender]);

  if (!canRender) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-[4] opacity-25 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-olive/20 blur-[120px]" />
        <div className="absolute top-2/3 -right-48 w-96 h-96 rounded-full bg-burnt/20 blur-[120px]" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[4]"
      aria-hidden="true"
    />
  );
}
