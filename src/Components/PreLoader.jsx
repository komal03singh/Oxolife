"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import OxoLifeLogo from "./OxoLifeLogo";

export default function Preloader({ onFinish }) {
  const Panel = useRef(null);
  const [logoDone, setLogoDone] = useState(false);

  useEffect(() => {
    if (logoDone) {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onFinish) onFinish();
        },
      });

      tl.to(Panel.current, {
        y: "-100%",
        borderRadius: "0 0 50% 50%",
        duration: 1.2,
        ease: "power2.out",
      });
    }
  }, [logoDone, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        ref={Panel}
        className="w-full h-full bg-[#F5F5F5] flex items-center justify-center"
      >
        <OxoLifeLogo onFinish={() => setLogoDone(true)} />
      </div>
    </div>
  );
}
