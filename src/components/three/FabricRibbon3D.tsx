"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * FabricRibbon3D
 * Signature Awwwards-grade 3D flowing fabric ribbon for NOVUS APPAREL.
 * Weaves smoothly across the viewport, responding to scroll progress and cursor motion.
 * Features dual-sided silk shading (Olive Green #69744B & Burnt Orange #D76C3F).
 */
export default function FabricRibbon3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // Check reduced motion & WebGL capability
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
    const ambientLight = new THREE.AmbientLight(0xf3ebdd, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xfff7ea, 1.4);
    dirLight1.position.set(4, 6, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xd76c3f, 0.7);
    dirLight2.position.set(-5, -4, 3);
    scene.add(dirLight2);

    // Mouse tracking with inertia
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

    // Parametric Ribbon Mesh
    const segments = 96;
    const ribbonWidth = 0.65;

    const createRibbonGeometry = (time: number, scroll: number, mx: number, my: number) => {
      const positions: number[] = [];
      const normals: number[] = [];
      const uvs: number[] = [];
      const indices: number[] = [];

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        // Wavy flowing thread formula
        const freq = 2.8;
        const wave1 = Math.sin(t * Math.PI * freq + time * 0.8 + scroll * 4.5);
        const wave2 = Math.cos(t * Math.PI * 1.6 - time * 0.5 + scroll * 3.0);

        // Core path spine
        const px = (t - 0.5) * 11 + mx * 0.8 * Math.sin(t * Math.PI);
        const py = wave1 * 1.35 + wave2 * 0.45 + (0.5 - scroll) * 2.8 + my * 0.4;
        const pz = Math.cos(t * Math.PI * 2.4 + time * 0.4) * 1.5 - (1 - t) * 0.8;

        // Tangent approximation
        const tx = 1.0;
        const ty = Math.cos(t * Math.PI * freq + time * 0.8) * 1.35;
        const tz = -Math.sin(t * Math.PI * 2.4 + time * 0.4) * 1.5;

        // Normal vector perpendicular to ribbon
        const normal = new THREE.Vector3(-ty, tx, tz * 0.2).normalize();
        const binormal = new THREE.Vector3(0, 0, 1).cross(normal).normalize();

        // Tapered edge width
        const taper = Math.sin(t * Math.PI);
        const currentWidth = ribbonWidth * (0.35 + 0.65 * taper);

        // Vertex 1: top edge
        const v1x = px + binormal.x * currentWidth;
        const v1y = py + binormal.y * currentWidth;
        const v1z = pz + binormal.z * currentWidth;

        // Vertex 2: bottom edge
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
      geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
      geom.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
      geom.setIndex(indices);
      geom.computeVertexNormals();
      return geom;
    };

    // Custom Luxury Silk Shader
    const ribbonMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOlive: { value: new THREE.Color(0x69744b) },
        uBurnt: { value: new THREE.Color(0xd76c3f) },
        uCream: { value: new THREE.Color(0xf3ebdd) },
        uOpacity: { value: 0.72 },
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
        uniform vec3 uOlive;
        uniform vec3 uBurnt;
        uniform vec3 uCream;
        uniform float uOpacity;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vViewPosition;

        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);

          // Dual-sided Silk Color blend: Olive on outer wave, Burnt Orange on inner wave
          float waveTransition = sin(vUv.x * 6.283 + uTime * 0.6) * 0.5 + 0.5;
          vec3 baseColor = mix(uOlive, uBurnt, waveTransition);

          // Specular highlights for lustrous satin hand-feel
          vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
          vec3 halfDir = normalize(lightDir + viewDir);
          float spec = pow(max(dot(normal, halfDir), 0.0), 38.0);

          // Fresnel edge rim for depth
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.2);

          vec3 finalColor = baseColor * (0.55 + 0.45 * max(dot(normal, lightDir), 0.0));
          finalColor += uCream * spec * 0.42;
          finalColor += uBurnt * fresnel * 0.35;

          // Soft edge fade at extremities
          float edgeAlpha = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
          float alpha = uOpacity * edgeAlpha * (0.85 + 0.15 * fresnel);

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

      // Smooth inertia on mouse & scroll
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollYProgress += (targetScroll - scrollYProgress) * 0.06;

      // Regenerate dynamic ribbon geometry
      const newGeom = createRibbonGeometry(
        elapsed,
        scrollYProgress,
        mouseX,
        mouseY
      );
      ribbonMesh.geometry.dispose();
      ribbonMesh.geometry = newGeom;

      // Subtle scene tilt
      ribbonMesh.rotation.y = mouseX * 0.12;
      ribbonMesh.rotation.x = mouseY * 0.08;

      ribbonMaterial.uniforms.uTime.value = elapsed;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Responsive resize handler
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
    // Graceful fallback: Atmospheric ambient glow
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
