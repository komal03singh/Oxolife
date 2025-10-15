"use client";
import { useEffect, useState } from "react";
import Preloader from "@/Components/PreLoader";

export default function RootProvider({ children }) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPreloader(true);
      sessionStorage.setItem("hasVisited", "true");
    }

    setChecked(true);
  }, []);

  if (!checked) return null;

  return (
    <>
      {showPreloader ? (
        <Preloader onFinish={() => setShowPreloader(false)} />
      ) : (
        children
      )}
    </>
  );
}

