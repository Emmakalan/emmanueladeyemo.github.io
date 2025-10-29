"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.043, 0.071, 0.125], // #0B1220
      markerColor: [0.639, 0.894, 0.208], // #A3E635
      glowColor: [0.419, 0.549, 1], // #6B8CFF
      markers: [
        // Lagos, Nigeria (Africa)
        { location: [6.5244, 3.3792], size: 0.08 },
        // London, UK (Europe)
        { location: [51.5074, -0.1278], size: 0.08 },
        // New York, USA (North America)
        { location: [40.7128, -74.006], size: 0.08 },
        // Tokyo, Japan (Asia)
        { location: [35.6762, 139.6503], size: 0.08 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: "1",
      }}
    />
  );
}
