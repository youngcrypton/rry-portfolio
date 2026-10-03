"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function SplashScreen() {
  const [isDone, setIsDone] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
    }, reducedMotion ? 400 : 3300);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  if (isDone) return null;

  return (
    <motion.div
      className="rry-splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: reducedMotion ? 0.3 : 2.82,
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        setIsDone(true);
      }}
    >
      <div className="splash-background" />

      <div className="splash-atmosphere splash-atmosphere-one" />
      <div className="splash-atmosphere splash-atmosphere-two" />
      <div className="splash-atmosphere splash-atmosphere-three" />

      <motion.div
        className="splash-orbit-system"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="splash-orbit splash-orbit-one" />
        <div className="splash-orbit splash-orbit-two" />
        <div className="splash-orbit splash-orbit-three" />

        <span className="splash-orbit-dot dot-one" />
        <span className="splash-orbit-dot dot-two" />
        <span className="splash-orbit-dot dot-three" />
        <span className="splash-orbit-dot dot-four" />
      </motion.div>

      {/* Faint avatar visible from the beginning */}
      <motion.div
        className="splash-ghost-avatar"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{
          opacity: [0, 0.18, 0.22, 0.14],
          scale: [0.88, 1, 1.02, 1],
        }}
        transition={{
          duration: 2.8,
          times: [0, 0.25, 0.6, 1],
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/rry-avatar.png"
          alt=""
          fill
          priority
          sizes="(max-width: 700px) 280px, 420px"
          className="splash-ghost-image"
        />
      </motion.div>

      {/* Colour splash liquid blobs */}
      <motion.div
        className="splash-liquid liquid-one"
        initial={{ scale: 0.05, opacity: 0 }}
        animate={{
          scale: [0.05, 1.1, 1.35, 1.15],
          opacity: [0, 0.95, 0.85, 0.7],
          rotate: [0, 20, -8, 14],
        }}
        transition={{
          duration: 2.8,
          ease: [0.16, 1, 0.3, 1],
          times: [0, 0.32, 0.68, 1],
        }}
      />

      <motion.div
        className="splash-liquid liquid-two"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.15, 0.92, 1.1],
          opacity: [0, 0.9, 0.7, 0.48],
          rotate: [0, -25, 12, -18],
        }}
        transition={{
          duration: 2.6,
          delay: 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <motion.div
        className="splash-liquid liquid-three"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 0.9, 1.25, 1],
          opacity: [0, 0.78, 0.6, 0.4],
          rotate: [0, 28, -14, 22],
        }}
        transition={{
          duration: 2.55,
          delay: 0.24,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <motion.div
        className="splash-liquid liquid-four"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.18, 0.9, 1.06],
          opacity: [0, 0.72, 0.52, 0.32],
          rotate: [0, -16, 18, -8],
        }}
        transition={{
          duration: 2.7,
          delay: 0.36,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Floating particles */}
      <div className="splash-particles">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.span
            key={index}
            className={`splash-particle splash-particle-${index + 1}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0.65],
              opacity: [0, 0.9, 0],
              x: [0, (index % 2 === 0 ? 1 : -1) * (20 + index * 4)],
              y: [0, index % 3 === 0 ? -35 - index * 2 : 25 + index * 3],
            }}
            transition={{
              duration: 1.4 + (index % 4) * 0.18,
              delay: 0.25 + index * 0.06,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Sharp avatar reveal */}
      <motion.div
        className="splash-final-avatar"
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{
          opacity: [0, 0.2, 0.7, 1],
          scale: [0.72, 0.92, 1.02, 1],
        }}
        transition={{
          duration: 2.2,
          delay: 0.6,
          times: [0, 0.3, 0.72, 1],
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="splash-final-glow" />

        <Image
          src="/images/rry-avatar.png"
          alt="Rry"
          fill
          priority
          sizes="(max-width: 700px) 280px, 420px"
          className="splash-final-image"
        />

        <motion.div
          className="splash-light-sweep"
          initial={{ x: "-130%", opacity: 0 }}
          animate={{ x: "130%", opacity: [0, 0.8, 0] }}
          transition={{
            delay: 1.35,
            duration: 0.9,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="splash-signature"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0, 0.8, 0.8], y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <span>AI</span>
        <i>&times;</i>
        <span>MARKETS</span>
      </motion.div>

      <motion.div
        className="splash-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.9, ease: "linear" }}
      />
    </motion.div>
  );
}
