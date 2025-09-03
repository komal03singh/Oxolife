"use client";
import { useState } from "react";
import Preloader from "@/Components/PreLoader";

export default function RootProvider({ children }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {!done ? <Preloader onFinish={() => setDone(true)} /> : children}
    </>
  );
}
