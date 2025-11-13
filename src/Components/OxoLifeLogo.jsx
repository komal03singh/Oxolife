"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OxoLifeLogo({ onFinish }) {
  const bubbleRef = useRef(null);
  const oRef = useRef(null);
  const textRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });

    tl.fromTo(
      bubbleRef.current,
      { x: 0, y: 0, scale: 1, opacity: 0 },
      { x: 28, y: -25, scale: 2, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    tl.to(bubbleRef.current, {
      scale: 3,
      duration: 1,
      x: 25,
      y: -50,
      ease: "elastic.out(1, 0.5)",
      onComplete: () => {
        bubbleRef.current.style.display = "none";
        oRef.current.style.opacity = 1;
      },
    });

    tl.fromTo(
      lettersRef.current,
      { opacity: 0, x: -40, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "back.out(1.5)",
        stagger: 0.2,
      }
    );

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    return () => tl.kill();
  }, [onFinish]);

  return (
    <svg width="1200" height="225" viewBox="0 0 400 180">
      <image height={200} width={200} href="/face.png" alt="exhaling air" />

      {/* Bubble that becomes O */}
      <circle ref={bubbleRef} cx="145" cy="80" r="10" fill="#26D6EA" />

      {/* Final O */}
      <circle
        ref={oRef}
        cx="410"
        cy="48"
        r="30"
        stroke="#80DEEA"
        strokeWidth="2"
        fill="none"
        opacity="0"
      />

      {/* Name */}
      <g fontFamily="Montserrat, sans-serif" fontSize="70" fill="#0F172A">
        <text
          ref={(el) => (lettersRef.current[0] = el)}
          x="145"
          y="95"
          fontWeight="300"
          fontSize="100"
          opacity="0"
        >
          S
        </text>
        <text
          ref={(el) => (lettersRef.current[1] = el)}
          x="182"
          y="95"
          fontWeight="300"
          fontSize="100"
          opacity="0"
        >
          N
        </text>
        <text
          ref={(el) => (lettersRef.current[2] = el)}
          x="228"
          y="95"
          fill="#80DEEA"
          fontWeight="300"
          fontSize="100"
          opacity="0"
        >
          K
        </text>
        <text
          ref={(el) => (lettersRef.current[3] = el)}
          x="290"
          y="95"
          fontWeight="300"
          fontSize="100"
          opacity="0"
        >
          G
        </text>
        <text
          ref={(el) => (lettersRef.current[4] = el)}
          x="340"
          y="90"
          fontWeight="300"
          fontSize="90"
          opacity="0"
        >
          L
        </text>
        <text
          ref={(el) => (lettersRef.current[5] = el)}
          x="435"
          y="95"
          fontWeight="300"
          fontSize="100"
          opacity="0"
        >
          B
        </text>
        <text
          ref={(el) => (lettersRef.current[6] = el)}
          x="487"
          y="95"
          fontWeight="300"
          fontSize="100"
          opacity="0"
        >
          A
        </text>
        <text
          ref={(el) => (lettersRef.current[7] = el)}
          x="534"
          y="95"
          fontWeight="300"
          fontSize="100"
          opacity="0"
        >
          L
        </text>
      </g>

      {/* Tagline */}
      <text
        ref={textRef}
        x="420"
        y="105"
        fontSize="13"
        fontWeight="400"
        opacity="0"
      >
        trusted medical equipments
      </text>
    </svg>
  );
}
