"use client";
import { useState } from "react";
import Preloader from "./Preloader";

export default function RootProvider({ children }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done ? <Preloader onFinish={() => setDone(true)} /> : children}
    </>
  );
}
