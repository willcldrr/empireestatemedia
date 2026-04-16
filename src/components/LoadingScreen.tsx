"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Wait for the page to fully load
    const handleLoad = () => {
      // Start fade out animation
      setIsFading(true);
      // Remove from DOM after animation completes
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    };

    // Check if already loaded
    if (document.readyState === "complete") {
      // Small delay to ensure content is painted
      setTimeout(handleLoad, 300);
    } else {
      window.addEventListener("load", () => setTimeout(handleLoad, 300));
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-[100] transition-opacity duration-700 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/eemlogofull.png"
          alt="Empire Estate Media"
          width={200}
          height={200}
          className="w-48 h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
