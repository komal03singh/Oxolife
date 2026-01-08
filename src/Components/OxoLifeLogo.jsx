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
      onComplete: () => onFinish && onFinish(),
    });

    tl.fromTo(
      bubbleRef.current,
      { x: 0, y: 0, scale: 1, opacity: 0 },
      { x: 28, y: -25, scale: 2, opacity: 1, duration: 1.5, ease: "power2.out" }
    )
      .to(bubbleRef.current, {
        scale: 3,
        duration: 1,
        x: 25,
        y: -50,
        ease: "elastic.out(1, 0.5)",
        onComplete: () => {
          bubbleRef.current.style.display = "none";
          oRef.current.style.opacity = 1;
        },
      })
      .fromTo(
        lettersRef.current,
        { opacity: 0, y: 40, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.5)",
          stagger: 0.15,
        }
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );

    return () => tl.kill();
  }, [onFinish]);

  return (
    <div className="w-full max-w-[650px] mx-auto">
      <svg
        viewBox="0 0 650 180"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        {/* Face Image */}
        <image height={200} width={200} href="/face.png" alt="exhaling air" />

        {/* Bubble that becomes O */}
        <circle ref={bubbleRef} cx="145" cy="80" r="10" fill="#0077b6" />

        {/* Final O */}
        <circle
          ref={oRef}
          cx="418"
          cy="48"
          r="30"
          stroke="#0077b6"
          strokeWidth="2"
          fill="none"
          opacity="0"
        />

        {/* === SNK GLOBAL Letters === */}
        <g fontFamily="Montserrat, sans-serif" fontWeight="300" fill="#0F172A">
          {/* S N K */}
          <text
            ref={(el) => (lettersRef.current[0] = el)}
            x="150"
            y="95"
            fontSize="100"
            opacity="0"
          >
            S
          </text>

          <text
            ref={(el) => (lettersRef.current[1] = el)}
            x="190"
            y="95"
            fontSize="100"
            opacity="0"
          >
            N
          </text>

          <text
            ref={(el) => (lettersRef.current[2] = el)}
            x="237"
            y="95"
            fontSize="100"
            fill="#0077b6"
            opacity="0"
          >
            K
          </text>

          {/* Space between SNK and GLOBAL */}
          <text
            ref={(el) => (lettersRef.current[3] = el)}
            x="300"
            y="95"
            fontSize="95"
            opacity="0"
          >
            G
          </text>

          <text
            ref={(el) => (lettersRef.current[4] = el)}
            x="349"
            y="95"
            fontSize="95"
            opacity="0"
          >
            L
          </text>

          <text
            ref={(el) => (lettersRef.current[5] = el)}
            x="444"
            y="95"
            fontSize="95"
            opacity="0"
          >
            B
          </text>

          <text
            ref={(el) => (lettersRef.current[6] = el)}
            x="495"
            y="95"
            fontSize="95"
            opacity="0"
          >
            A
          </text>

          <text
            ref={(el) => (lettersRef.current[7] = el)}
            x="542"
            y="95"
            fontSize="95"
            opacity="0"
          >
            L
          </text>
        </g>

        {/* Tagline */}
        <text
          ref={textRef}
          x="410"
          y="106"
          fontSize="15"
          fontWeight="400"
          opacity="0"
        >
          trusted medical equipments
        </text>
      </svg>
    </div>
  );
}
